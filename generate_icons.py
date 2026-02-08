from PIL import Image, ImageDraw

def create_icon(size, filename):
    # Create a solid square image with Neuroterp brand color
    color = (45, 212, 191) # #2dd4bf
    image = Image.new('RGB', (size, size), color)
    draw = ImageDraw.Draw(image)
    
    # Draw a simple 'N' or circle for branding
    margin = size // 4
    draw.ellipse([margin, margin, size - margin, size - margin], outline=(255, 255, 255), width=size // 20)
    
    image.save(filename, 'PNG')

try:
    create_icon(192, 'icons/icon-192.png')
    create_icon(512, 'icons/icon-512.png')
    print("Icons created successfully")
except Exception as e:
    print(f"Error: {e}")
