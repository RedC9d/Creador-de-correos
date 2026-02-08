// Email Templates Configuration
const emailTemplates = [
    {
        id: 'presentacion-inicial',
        name: '📧 Presentación Inicial',
        description: 'Primera presentación de productos y servicios',
        fields: [
            {
                id: 'nombre',
                label: 'Nombre del destinatario',
                type: 'text',
                placeholder: 'Ej: Juan Pérez',
                defaultValue: '[Nombre]'
            },
            {
                id: 'empresa',
                label: 'Empresa del destinatario (opcional)',
                type: 'text',
                placeholder: 'Ej: Farmacia Central',
                defaultValue: ''
            },
            {
                id: 'productos_adicionales',
                label: 'Productos adicionales (opcional)',
                type: 'textarea',
                placeholder: 'Agregar más productos si desea...',
                defaultValue: ''
            }
        ],
        generateHTML: (data) => {
            const empresa = data.empresa ? ` de ${data.empresa}` : '';
            const productosAdicionales = data.productos_adicionales
                ? `<li>${data.productos_adicionales.split('\n').join('</li><li>')}</li>`
                : '';

            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuroterp™ - Presentación de Productos</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                            <img src="https://neuroterp.com/images/logoNeuroterp3.png" alt="Neuroterp™" style="max-width: 200px; height: auto;" />
                        </td>
                    </tr>
                    
                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 40px 30px; color: #333333; line-height: 1.8;">
                            <p style="font-size: 16px; margin-bottom: 20px;">
                                Hola <strong>${data.nombre}</strong>${empresa}, un gusto saludarle.
                            </p>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                Mi nombre es <strong>Luisa Alvarez</strong> de <strong>Neuroterp™ S.A.S.</strong> Le contacto para presentarle nuestra propuesta de insumos naturales. Somos una planta de producción en el Quindío especializada en extractos 100% naturales (0% sintéticos):
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                <li style="margin-bottom: 10px;"><strong>Aceites Esenciales:</strong> Menta, Romero, Tomillo, Lavanda y Eucalipto, y más. (Consulta)</li>
                                <li style="margin-bottom: 10px;"><strong>Absolutos:</strong> Vainilla Premium, Cacao, Café, Jazmín, Rosas, Canela y Clavo de Olor y más (consulta)</li>
                                <li style="margin-bottom: 10px;"><strong>Oleorresinas:</strong> Extractos de alta estabilidad como la Cúrcuma</li>
                                <li style="margin-bottom: 10px;"><strong>Tinturas:</strong> Melena de León, Tabaco y Vainilla (Grado Gastronómico y Cosmético).</li>
                                ${productosAdicionales}
                            </ul>
                            
                            <p style="font-weight: bold; color: #2c5282; margin-top: 25px; margin-bottom: 15px; font-size: 16px;">
                                Diferenciales:
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                <li style="margin-bottom: 10px;"><strong>Garantía Real:</strong> Si un laboratorio demuestra que el producto no es natural, devolvemos su dinero.</li>
                                <li style="margin-bottom: 10px;"><strong>Logística:</strong> Envíos nacionales e internacionales; flete gratuito en pedidos superiores a $1.000.000.</li>
                            </ul>
                            
                            <p style="font-size: 15px; margin-top: 25px;">
                                Te adjunto el catálogo
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer/Signature -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-top: 3px solid #2dd4bf;">
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #333;">
                                Atentamente,<br>
                                <strong style="color: #2c5282; display: block; margin-top: 10px;">Luisa Alvarez</strong>
                                <span style="color: #666;">Asesora Comercial | Neuroterp™ S.A.S.</span><br>
                                <span style="color: #666;">WhatsApp: 322 369 4572</span><br>
                                <a href="https://neuroterp.com" style="color: #2dd4bf; text-decoration: none;">https://neuroterp.com</a>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
        }
    },
    {
        id: 'seguimiento-cotizacion',
        name: '📊 Seguimiento de Cotización',
        description: 'Email de seguimiento después de enviar cotización',
        fields: [
            {
                id: 'nombre',
                label: 'Nombre del destinatario',
                type: 'text',
                placeholder: 'Ej: María González',
                defaultValue: '[Nombre]'
            },
            {
                id: 'fecha_cotizacion',
                label: 'Fecha de cotización',
                type: 'text',
                placeholder: 'Ej: 5 de febrero',
                defaultValue: '[fecha]'
            },
            {
                id: 'productos_cotizados',
                label: 'Productos cotizados',
                type: 'textarea',
                placeholder: 'Ej: Aceite Esencial de Menta\nAbsoluto de Vainilla Premium',
                defaultValue: 'Aceite Esencial de Menta\nAbsoluto de Vainilla Premium'
            }
        ],
        generateHTML: (data) => {
            const productos = data.productos_cotizados
                .split('\n')
                .filter(p => p.trim())
                .map(p => `<li style="margin-bottom: 8px;">${p.trim()}</li>`)
                .join('');

            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuroterp™ - Seguimiento de Cotización</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <tr>
                        <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                            <img src="https://neuroterp.com/images/logoNeuroterp3.png" alt="Neuroterp™" style="max-width: 200px; height: auto;" />
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 40px 30px; color: #333333; line-height: 1.8;">
                            <p style="font-size: 16px; margin-bottom: 20px;">
                                Hola <strong>${data.nombre}</strong>,
                            </p>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                Espero que se encuentre muy bien. Le escribo para hacer seguimiento a la cotización que le enviamos el <strong>${data.fecha_cotizacion}</strong> sobre los siguientes productos:
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                ${productos}
                            </ul>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                ¿Ha tenido la oportunidad de revisar nuestra propuesta? Me encantaría resolver cualquier duda que pueda tener sobre nuestros productos, precios o condiciones de envío.
                            </p>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                Recuerde que ofrecemos:
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                <li style="margin-bottom: 10px;"><strong>Garantía de naturalidad 100%</strong> - Devolución garantizada si no cumple</li>
                                <li style="margin-bottom: 10px;"><strong>Envío gratuito</strong> en pedidos superiores a $1.000.000</li>
                                <li style="margin-bottom: 10px;"><strong>Asesoría personalizada</strong> para elegir el producto ideal</li>
                            </ul>
                            
                            <p style="font-size: 15px; margin-top: 25px;">
                                Quedo atenta a sus comentarios y disponible para cualquier consulta.
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-top: 3px solid #2dd4bf;">
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #333;">
                                Atentamente,<br>
                                <strong style="color: #2c5282; display: block; margin-top: 10px;">Luisa Alvarez</strong>
                                <span style="color: #666;">Asesora Comercial | Neuroterp™ S.A.S.</span><br>
                                <span style="color: #666;">WhatsApp: 322 369 4572</span><br>
                                <a href="https://neuroterp.com" style="color: #2dd4bf; text-decoration: none;">https://neuroterp.com</a>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
        }
    },
    {
        id: 'promocion-especial',
        name: '🎁 Promoción Especial',
        description: 'Email de promoción o descuento especial',
        fields: [
            {
                id: 'nombre',
                label: 'Nombre del destinatario',
                type: 'text',
                placeholder: 'Ej: Carlos Ramírez',
                defaultValue: '[Nombre]'
            },
            {
                id: 'titulo_promocion',
                label: 'Título de la promoción',
                type: 'text',
                placeholder: 'Ej: Descuento especial del 15%',
                defaultValue: 'Promoción Especial'
            },
            {
                id: 'descripcion_promocion',
                label: 'Descripción de la promoción',
                type: 'textarea',
                placeholder: 'Describe los detalles de la promoción...',
                defaultValue: 'Descuento exclusivo del 15% en todos nuestros productos durante este mes.'
            },
            {
                id: 'productos_promocion',
                label: 'Productos en promoción',
                type: 'textarea',
                placeholder: 'Lista de productos...',
                defaultValue: 'Aceites Esenciales\nAbsolutos Premium\nOleorresinas'
            }
        ],
        generateHTML: (data) => {
            const productos = data.productos_promocion
                .split('\n')
                .filter(p => p.trim())
                .map(p => `<li style="margin-bottom: 8px;">${p.trim()}</li>`)
                .join('');

            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuroterp™ - ${data.titulo_promocion}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <tr>
                        <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                            <img src="https://neuroterp.com/images/logoNeuroterp3.png" alt="Neuroterp™" style="max-width: 200px; height: auto;" />
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 40px 30px; color: #333333; line-height: 1.8;">
                            <p style="font-size: 16px; margin-bottom: 20px;">
                                Hola <strong>${data.nombre}</strong>,
                            </p>
                            
                            <div style="background: linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%); padding: 25px; border-radius: 8px; text-align: center; margin: 25px 0;">
                                <h2 style="color: #ffffff; margin: 0 0 10px 0; font-size: 24px;">🎁 ${data.titulo_promocion}</h2>
                                <p style="color: #ffffff; margin: 0; font-size: 16px; opacity: 0.95;">Oferta exclusiva para clientes selectos</p>
                            </div>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                ${data.descripcion_promocion}
                            </p>
                            
                            <p style="font-weight: bold; color: #2c5282; margin-top: 25px; margin-bottom: 15px; font-size: 16px;">
                                Productos incluidos:
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                ${productos}
                            </ul>
                            
                            <p style="font-size: 15px; margin-bottom: 20px; background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; border-radius: 4px;">
                                ⏰ <strong>Oferta válida por tiempo limitado.</strong> No pierdas esta oportunidad de adquirir nuestros productos 100% naturales.
                            </p>
                            
                            <p style="font-size: 15px; margin-top: 25px;">
                                Para más información sobre esta promoción o para hacer tu pedido, contáctame directamente.
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-top: 3px solid #2dd4bf;">
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #333;">
                                Atentamente,<br>
                                <strong style="color: #2c5282; display: block; margin-top: 10px;">Luisa Alvarez</strong>
                                <span style="color: #666;">Asesora Comercial | Neuroterp™ S.A.S.</span><br>
                                <span style="color: #666;">WhatsApp: 322 369 4572</span><br>
                                <a href="https://neuroterp.com" style="color: #2dd4bf; text-decoration: none;">https://neuroterp.com</a>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
        }
    },
    {
        id: 'agradecimiento',
        name: '💚 Agradecimiento Post-Venta',
        description: 'Email de agradecimiento después de una compra',
        fields: [
            {
                id: 'nombre',
                label: 'Nombre del destinatario',
                type: 'text',
                placeholder: 'Ej: Ana Martínez',
                defaultValue: '[Nombre]'
            },
            {
                id: 'productos_comprados',
                label: 'Productos comprados',
                type: 'textarea',
                placeholder: 'Lista de productos...',
                defaultValue: 'Aceite Esencial de Lavanda\nAbsoluto de Vainilla Premium'
            },
            {
                id: 'mensaje_personal',
                label: 'Mensaje personal (opcional)',
                type: 'textarea',
                placeholder: 'Mensaje adicional...',
                defaultValue: ''
            }
        ],
        generateHTML: (data) => {
            const productos = data.productos_comprados
                .split('\n')
                .filter(p => p.trim())
                .map(p => `<li style="margin-bottom: 8px;">${p.trim()}</li>`)
                .join('');

            const mensajePersonal = data.mensaje_personal
                ? `<p style="font-size: 15px; margin-bottom: 20px; background-color: #e0f2fe; padding: 15px; border-left: 4px solid #2dd4bf; border-radius: 4px;">${data.mensaje_personal}</p>`
                : '';

            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuroterp™ - Gracias por su compra</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <tr>
                        <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                            <img src="https://neuroterp.com/images/logoNeuroterp3.png" alt="Neuroterp™" style="max-width: 200px; height: auto;" />
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 40px 30px; color: #333333; line-height: 1.8;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h2 style="color: #2c5282; margin: 0; font-size: 28px;">💚 ¡Gracias por su compra!</h2>
                            </div>
                            
                            <p style="font-size: 16px; margin-bottom: 20px;">
                                Estimado/a <strong>${data.nombre}</strong>,
                            </p>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                Queremos agradecerle por confiar en <strong>Neuroterp™</strong> para sus necesidades de productos naturales. Su pedido ha sido procesado y pronto estará en camino.
                            </p>
                            
                            ${mensajePersonal}
                            
                            <p style="font-weight: bold; color: #2c5282; margin-top: 25px; margin-bottom: 15px; font-size: 16px;">
                                Productos adquiridos:
                            </p>
                            
                            <ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">
                                ${productos}
                            </ul>
                            
                            <p style="font-size: 15px; margin-bottom: 20px;">
                                Esperamos que disfrute de nuestros productos 100% naturales. Si tiene alguna pregunta sobre el uso o almacenamiento de los productos, no dude en contactarnos.
                            </p>
                            
                            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #10b981;">
                                <p style="margin: 0; font-size: 15px; color: #166534;">
                                    <strong>💡 ¿Necesita más productos?</strong><br>
                                    Recuerde que ofrecemos envío gratuito en pedidos superiores a $1.000.000. Consulte nuestro catálogo completo para descubrir más productos naturales.
                                </p>
                            </div>
                            
                            <p style="font-size: 15px; margin-top: 25px;">
                                Gracias nuevamente por elegirnos. Esperamos poder servirle pronto.
                            </p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-top: 3px solid #2dd4bf;">
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #333;">
                                Atentamente,<br>
                                <strong style="color: #2c5282; display: block; margin-top: 10px;">Luisa Alvarez</strong>
                                <span style="color: #666;">Asesora Comercial | Neuroterp™ S.A.S.</span><br>
                                <span style="color: #666;">WhatsApp: 322 369 4572</span><br>
                                <a href="https://neuroterp.com" style="color: #2dd4bf; text-decoration: none;">https://neuroterp.com</a>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
        }
    },
    {
        id: 'correo-personalizado',
        name: '📝 Correo Personalizado',
        description: 'Crea un correo desde cero con contenido libre',
        fields: [
            {
                id: 'titulo',
                label: 'Título del Correo',
                type: 'text',
                placeholder: 'Ej: Información importante sobre...',
                defaultValue: 'Título del Correo'
            },
            {
                id: 'saludo',
                label: 'Saludo',
                type: 'text',
                placeholder: 'Ej: Hola Juan,',
                defaultValue: 'Hola,'
            },
            {
                id: 'contenido',
                label: 'Contenido del Correo',
                type: 'textarea',
                placeholder: 'Escribe aquí todo el cuerpo del mensaje...',
                defaultValue: 'Este es un mensaje personalizado creado desde la aplicación.'
            },
            {
                id: 'lista',
                label: 'Lista de puntos (opcional)',
                type: 'textarea',
                placeholder: 'Un punto por línea...',
                defaultValue: ''
            },
            {
                id: 'texto_final',
                label: 'Texto final / Despedida',
                type: 'textarea',
                placeholder: 'Ej: Quedo atento a tus comentarios.',
                defaultValue: 'Quedo atento a tus comentarios.'
            }
        ],
        generateHTML: (data) => {
            const listaItems = data.lista
                ? `<ul style="margin: 20px 0; padding-left: 20px; font-size: 15px;">${data.lista.split('\n').filter(l => l.trim()).map(l => `<li style="margin-bottom: 10px;">${l.trim()}</li>`).join('')}</ul>`
                : '';

            // Handle line breaks in content
            const contentHTML = data.contenido.replace(/\n/g, '<br>');

            return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neuroterp™ - Correo Personalizado</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);">
                            <img src="https://neuroterp.com/images/logoNeuroterp3.png" alt="Neuroterp™" style="max-width: 200px; height: auto;" />
                        </td>
                    </tr>
                    
                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 40px 30px; color: #333333; line-height: 1.8;">
                            <h2 style="color: #2c5282; margin: 0 0 20px 0; font-size: 24px;">${data.titulo}</h2>
                            
                            <p style="font-size: 16px; margin-bottom: 20px;">
                                ${data.saludo}
                            </p>
                            
                            <div style="font-size: 15px; margin-bottom: 20px;">
                                ${contentHTML}
                            </div>
                            
                            ${listaItems}
                            
                            <p style="font-size: 15px; margin-top: 25px;">
                                ${data.texto_final}
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer/Signature -->
                    <tr>
                        <td style="padding: 30px; background-color: #f8f9fa; border-top: 3px solid #2dd4bf;">
                            <p style="font-size: 14px; line-height: 1.6; margin: 0; color: #333;">
                                Atentamente,<br>
                                <strong style="color: #2c5282; display: block; margin-top: 10px;">Luisa Alvarez</strong>
                                <span style="color: #666;">Asesora Comercial | Neuroterp™ S.A.S.</span><br>
                                <span style="color: #666;">WhatsApp: 322 369 4572</span><br>
                                <a href="https://neuroterp.com" style="color: #2dd4bf; text-decoration: none;">https://neuroterp.com</a>
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
        }
    }
];
