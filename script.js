// Global State
let currentTemplate = null;
let formData = {};
let deferredPrompt = null;

// DOM Elements
const templateList = document.getElementById('templateList');
const editorForm = document.getElementById('editorForm');
const emailPreview = document.getElementById('emailPreview');
const currentTemplateName = document.getElementById('currentTemplateName');
const editTab = document.getElementById('editTab');
const previewTab = document.getElementById('previewTab');
const toast = document.getElementById('toast');
const installBtn = document.getElementById('installBtn');

// PWA Install Logic
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show the install button
    installBtn.style.display = 'block';
    console.log('PWA installation prompt available');
});

// Handle successful installation
window.addEventListener('appinstalled', () => {
    // Hide the install button
    installBtn.style.display = 'none';
    // Clear the deferredPrompt
    deferredPrompt = null;
    showToast('✅ App instalada exitosamente');
    console.log('PWA was installed');
});

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadTemplates();
    setupEventListeners();
    setupPWAInstall();
});

// Load Templates into Sidebar
function loadTemplates() {
    templateList.innerHTML = '';

    emailTemplates.forEach(template => {
        const button = document.createElement('button');
        button.className = 'template-btn';
        button.textContent = template.name;
        button.dataset.templateId = template.id;
        button.addEventListener('click', () => selectTemplate(template.id));
        templateList.appendChild(button);
    });
}

// Select Template
function selectTemplate(templateId) {
    const template = emailTemplates.find(t => t.id === templateId);
    if (!template) return;

    currentTemplate = template;
    formData = {};

    // Update UI
    currentTemplateName.textContent = template.name;

    // Update active state
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.templateId === templateId) {
            btn.classList.add('active');
        }
    });

    // Build form
    buildForm(template);

    // Update preview
    updatePreview();

    showToast('Plantilla cargada: ' + template.name);
}

// Build Dynamic Form
function buildForm(template) {
    editorForm.innerHTML = '';

    template.fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = field.label;
        label.htmlFor = field.id;

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 5;
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }

        input.id = field.id;
        input.name = field.id;
        input.placeholder = field.placeholder;
        input.value = field.defaultValue;

        // Store initial value
        formData[field.id] = field.defaultValue;

        // Update on change
        input.addEventListener('input', (e) => {
            formData[field.id] = e.target.value;
            updatePreview();
        });

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        editorForm.appendChild(formGroup);
    });
}

// Update Preview
function updatePreview() {
    if (!currentTemplate) {
        emailPreview.innerHTML = '<p class="empty-state">Selecciona una plantilla para ver la vista previa</p>';
        return;
    }

    const html = currentTemplate.generateHTML(formData);

    // Display preview (remove the outer html/body tags for display)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const bodyContent = tempDiv.querySelector('body');

    if (bodyContent) {
        emailPreview.innerHTML = bodyContent.innerHTML;
    } else {
        emailPreview.innerHTML = html;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            switchTab(tab);
        });
    });

    // Copy HTML button
    document.getElementById('copyHtmlBtn').addEventListener('click', copyHTML);

    // Download HTML button
    document.getElementById('downloadHtmlBtn').addEventListener('click', downloadHTML);

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetForm);
}

// Setup PWA Install
function setupPWAInstall() {
    // Install button click handler
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredPrompt) {
                // FALLBACK: Si no hay prompt nativo, descargar el instalador .bat
                showToast('⬇️ Descargando instalador para Windows...', 'info');

                const link = document.createElement('a');
                link.href = 'Instalar-Neuroterp.bat';
                link.download = 'Instalar-Neuroterp.bat';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setTimeout(() => {
                    showToast('📂 Ejecuta el archivo descargado para instalar', 'success');
                }, 2000);

                console.log('Triggered fallback download of Instalar-Neuroterp.bat');
                return;
            }

            // Show the install prompt
            deferredPrompt.prompt();

            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
                showToast('✅ Instalando la aplicación...');
            } else {
                console.log('User dismissed the install prompt');
                showToast('ℹ️ Instalación cancelada');
            }

            // Clear the deferredPrompt so it can only be used once
            deferredPrompt = null;
            installBtn.style.display = 'none';
        });
    }
}

// Switch Tab
function switchTab(tab) {
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    if (tab === 'edit') {
        editTab.classList.add('active');
    } else if (tab === 'preview') {
        previewTab.classList.add('active');
        updatePreview();
    }
}

// Copy HTML to Clipboard
async function copyHTML() {
    if (!currentTemplate) {
        showToast('⚠️ Selecciona una plantilla primero', 'error');
        return;
    }

    const html = currentTemplate.generateHTML(formData);

    try {
        await navigator.clipboard.writeText(html);
        showToast('✅ HTML copiado al portapapeles');
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = html;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✅ HTML copiado al portapapeles');
    }
}

// Download HTML File
function downloadHTML() {
    if (!currentTemplate) {
        showToast('⚠️ Selecciona una plantilla primero', 'error');
        return;
    }

    const html = currentTemplate.generateHTML(formData);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `neuroterp-email-${currentTemplate.id}-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('✅ HTML descargado');
}

// Reset Form
function resetForm() {
    if (!currentTemplate) return;

    if (confirm('¿Estás seguro de que quieres resetear el formulario?')) {
        selectTemplate(currentTemplate.id);
        showToast('🔄 Formulario reseteado');
    }
}

// Show Toast Notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.classList.add('show');

    if (type === 'error') {
        toast.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    } else {
        toast.style.background = 'linear-gradient(135deg, #10b981 0%, #2dd4bf 100%)';
    }

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
