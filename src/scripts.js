// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap';

// Import custom styles and scripts
import './styles.css';

import { blocks } from './blocks/blocks';
// Import Bootstrap's JavaScript

// Import Bootstrap's CSS


const editor = grapesjs.init({
    container: '#gjs',
    
   
    fromElement: true,
    height: '100%',
    width: '100%',
    storageManager: false,
    allowScripts: 1,
    plugins: ['grapesjs-navbar','grapesjs-plugin-export'],
    pluginsOpts: {
      'grapesjs-navbar': {
          id: 'navbar',
          label: 'Navbar 1',
          block: {
              category: 'Navigation',
          },
          style: '',
          styleAdditional: '',
          classPrefix: 'navbar',
          

      },
      
      'grapesjs-plugin-export': {
        filename: editor => 'custom-template.zip',
        root: {
          'index.html': ed => `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Exported Template</title>
              <link rel="stylesheet" href="style.css">
            </head>
            <body>
              ${ed.getHtml()}
            </body>
            </html>
          `,
          'style.css': ed => ed.getCss(),
        }
      }
  },
  
  
    panels: { defaults: [] },
    
    
    
    blockManager: {
        appendTo: '.block-container',
        blocks: [
  
  
  
  
  
 
  
  
        ]
        
    },
  
    
    layerManager: {
        appendTo: '.layers-container'
    },
    deviceManager: {
      devices: [{
          name: 'Desktop',
          width: '', // default size
        },{
          name: 'Tablet',
          width: '770px', // this value will be used on canvas width
          widthMedia: '680px', // this value will be used in CSS @media
      }, {
          name: 'Mobile',
          width: '320px', // this value will be used on canvas width
          widthMedia: '480px', // this value will be used in CSS @media
      },
      ]
    },
    panels: {
        defaults: [
          
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              
            
              
              {
                id: 'device-desktop',
                label: '<svg fill="#FFFDD0" width="24" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><rect id="primary" x="2.5" y="3" width="19" height="18" rx="1" style="fill: none; stroke: #FFFDD0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect></svg>',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              }
              ,
              {
                id: 'device-tablet',
                label: '<svg fill="#FFFDD0" width="24" height="20" viewBox="0 0 24 24" id="tablet" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary-upstroke" x1="12" y1="17" x2="12" y2="17" style="fill: none; stroke: #FFFDD0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><rect id="primary" x="5" y="3" width="14" height="18" rx="1" style="fill: none; stroke: #FFFDD0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect></svg>',
                command: 'set-device-tablet',
                togglable: true,
                active: false,
              }
              ,
              {
                id: 'device-mobile',
                label: '<svg fill="#FFFDD0" width="24" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="secondary-upstroke" x1="12" y1="17" x2="12" y2="17" style="fill: none; stroke: #FFFDD0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><rect id="primary" x="6.5" y="3" width="11" height="18" rx="1" style="fill: none; stroke: #FFFDD0; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect></svg>',
                command: 'set-device-mobile',
                togglable: true,
                active: false,
              }
              
              
            ],
          },{
            id: 'layers',
            el: '.panel__right',
            resizable: {
                maxDim: 350,
                minDim: 200,
                tc: 0, // Top handler
                cl: 1, // Left handler
                cr: 0, // Right handler
                bc: 0, // Bottom handler
                keyWidth: 'flex-basis',
            },
        },
        {
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [
            {
              id: 'preview',
              className: "fa fa-eye",
              command: 'preview',
              active: false,
              togglable: true,
            },
            {
              id: 'undo',
              className: "fa fa-arrow-left",
              command: 'undo',
              active: false,
              togglable: false,
            },
            {
              id: 'redo',
              className: "fa fa-arrow-right",
              command: 'redo',
              active: false,
              togglable: false,
            },
            {
              id: 'clear-all',
              className: "fa fa-trash",
              command: 'clear-all',
              active: false,
              togglable: false,
            },
            
            
            {
              id: 'show-blocks',
              active: true,
              
              className: 'fa fa-th',
              command: 'show-blocks',
              togglable: false,
          },
            
          {
              id: 'show-layers',
              active: true,
              className: 'fa fa-object-group',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: false,
            }, {
              id: 'show-style',
              active: true,
              className: 'fa fa-paint-brush',
              command: 'show-styles',
              togglable: false,
          },
          {
            id: 'show-traits',
            active: true,
            className: 'fa fa-cogs',
            command: 'show-traits',
            togglable: false,
        },
        
  
        ],
        },
  
      
      ],
    },
  
    
  
    selectorManager: {
      appendTo: '.styles-container'
    },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [
        {
          name: 'General',
          open: true,
          buildProps: ['display', 'position', 'top', 'right', 'bottom', 'left'],
          properties: [
            {
              type: 'select',
              label: 'Display',
              property: 'display',
              default: 'block',
              options: [
                { id: 'block', label: 'Block' },
                { id: 'inline', label: 'Inline' },
                { id: 'inline-block', label: 'Inline Block' },
                { id: 'flex', label: 'Flex' },
                { id: 'none', label: 'None' },
              ],
            },
            {
              type: 'select',
              label: 'Position',
              property: 'position',
              default: 'static',
              options: [
                { id: 'static', label: 'Static' },
                { id: 'relative', label: 'Relative' },
                { id: 'absolute', label: 'Absolute' },
                { id: 'fixed', label: 'Fixed' },
                { id: 'sticky', label: 'Sticky' },
              ],
            },
            {
              type: 'number',
              label: 'Top',
              property: 'top',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Right',
              property: 'right',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Bottom',
              property: 'bottom',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Left',
              property: 'left',
              units: ['px', '%', 'em', 'rem'],
            },
          ],
        },
        {
          name: 'Dimensions',
          open: false,
          buildProps: ['width', 'height', 'max-width', 'max-height', 'min-width', 'min-height'],
          properties: [
            {
              type: 'number',
              label: 'Width',
              property: 'width',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Height',
              property: 'height',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Max Width',
              property: 'max-width',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Max Height',
              property: 'max-height',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Min Width',
              property: 'min-width',
              units: ['px', '%', 'em', 'rem'],
            },
            {
              type: 'number',
              label: 'Min Height',
              property: 'min-height',
              units: ['px', '%', 'em', 'rem'],
            },
          ],
        },
        {
          name: 'Typography',
          open: false,
          buildProps: ['font-family', 'font-size', 'color', 'font-weight', 'text-align', 'line-height', 'letter-spacing'],
          properties: [
            {
              type: 'select',
              label: 'Font Family',
              property: 'font-family',
              options: [
               
                {
                  id: 'Arial, Helvetica, sans-serif',
                  label: 'Arial'
                },
                {
                  id: 'Georgia, serif',
                  label: 'Georgia'
                },
                {
                  id: 'Times New Roman, Times, serif',
                  label: 'Times New Roman'
                },
                {
                  id: 'Verdana, Geneva, sans-serif',
                  label: 'Verdana'
                },
                {
                  id: 'Courier New, Courier, monospace',
                  label: 'Courier New'
                },
                {
                  id: 'Lucida Console, Monaco, monospace',
                  label: 'Lucida Console'
                },
                {
                  id: 'Trebuchet MS, Helvetica, sans-serif',
                  label: 'Trebuchet MS'
                },
                {
                  id: 'Impact, Charcoal, sans-serif',
                  label: 'Impact'
                },
                {
                  id: 'Comic Sans MS, cursive, sans-serif',
                  label: 'Comic Sans MS'
                },
                {
                  id: 'Arial Black, Gadget, sans-serif',
                  label: 'Arial Black'
                },
                {
                  id: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  label: 'Helvetica Neue'
                },
                {
                  id: 'Palatino Linotype, Book Antiqua, Palatino, serif',
                  label: 'Palatino Linotype'
                },
                {
                  id: 'Garamond, serif',
                  label: 'Garamond'
                },
                {
                  id: 'Futura, sans-serif',
                  label: 'Futura'
                },
                {
                  id: 'Tahoma, Geneva, sans-serif',
                  label: 'Tahoma'
                },
                {
                  id: 'Microsoft Sans Serif, Verdana, sans-serif',
                  label: 'Microsoft Sans Serif'
                },
                {
                  id: 'Frank Ruhl, serif',
                  label: 'Frank Ruhl'
                }
                
              ],
            },
            {
              type: 'number',
              label: 'Font Size',
              property: 'font-size',
              units: ['px', 'em', 'rem'],
              min: 0,
              default: '16px',
            },
            {
              type: 'color',
              label: 'Color',
              property: 'color',
              default: '#000000',
            },
            {
              type: 'select',
              label: 'Font Weight',
              property: 'font-weight',
              default: '400',
              options: [
                { id: '100', label: 'Thin' },
                { id: '200', label: 'Extra Light' },
                { id: '300', label: 'Light' },
                { id: '400', label: 'Normal' },
                { id: '500', label: 'Medium' },
                { id: '600', label: 'Semi Bold' },
                { id: '700', label: 'Bold' },
                { id: '800', label: 'Extra Bold' },
                { id: '900', label: 'Black' },
              ],
            },
            {
              type: 'select',
              label: 'Text Align',
              property: 'text-align',
              default: 'left',
              options: [
                { id: 'left', label: 'Left' },
                { id: 'center', label: 'Center' },
                { id: 'right', label: 'Right' },
                { id: 'justify', label: 'Justify' },
              ],
            },
            {
              type: 'number',
              label: 'Line Height',
              property: 'line-height',
              units: ['px', 'em', 'rem'],
              min: 0,
            },
            {
              type: 'number',
              label: 'Letter Spacing',
              property: 'letter-spacing',
              units: ['px', 'em', 'rem'],
              min: 0,
            },
          ],
        },
        {
          name: 'Decoration',
          open: false,
          buildProps: ['background-color', 'border-style', 'border-width', 'border-color', 'border-radius', 'box-shadow'],
          properties: [
            {
              type: 'color',
              label: 'Background Color',
              property: 'background-color',
              default: 'transparent',
            },
            {
              type: 'select',
              label: 'Border Style',
              property: 'border-style',
              options: [
                { id: 'none', label: 'None' },
                { id: 'solid', label: 'Solid' },
                { id: 'dashed', label: 'Dashed' },
                { id: 'dotted', label: 'Dotted' },
              ],
            },
            {
              type: 'number',
              label: 'Border Width',
              property: 'border-width',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'color',
              label: 'Border Color',
              property: 'border-color',
              default: '#000000',
            },
            {
              type: 'number',
              label: 'Border Radius',
              property: 'border-radius',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'select',
              label: 'Box Shadow Type',
              property: 'box-shadow-type',
              default: 'none',
              options: [
                { id: 'none', label: 'None' },
                { id: 'inset', label: 'Inset' },
                { id: 'outset', label: 'Outset' },
              ],
            },
            {
              type: 'number',
              label: 'Box Shadow Horizontal',
              property: 'box-shadow-h',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'number',
              label: 'Box Shadow Vertical',
              property: 'box-shadow-v',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'number',
              label: 'Box Shadow Blur',
              property: 'box-shadow-blur',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'number',
              label: 'Box Shadow Spread',
              property: 'box-shadow-spread',
              units: ['px'],
              min: 0,
              default: '0',
            },
            {
              type: 'color',
              label: 'Box Shadow Color',
              property: 'box-shadow-color',
              default: '#000000',
            },
          ],
        },
        {
          name: 'Extra',
          open: false,
          buildProps: ['opacity', 'z-index', 'overflow', 'top', 'right', 'bottom', 'left'],
          properties: [
            {
              type: 'number',
              label: 'Opacity',
              property: 'opacity',
              units: ['%'],
              min: 0,
              max: 100,
              default: '100',
            },
            {
              type: 'number',
              label: 'Z Index',
              property: 'z-index',
              min: 0,
              default: '0',
            },
            {
              type: 'select',
              label: 'Overflow',
              property: 'overflow',
              default: 'visible',
              options: [
                { id: 'visible', label: 'Visible' },
                { id: 'hidden', label: 'Hidden' },
                { id: 'scroll', label: 'Scroll' },
                { id: 'auto', label: 'Auto' },
              ],
            },
          ],
        },
        {
          name: 'Flex',
          open: false,
          properties: [
            {
              type: 'select',
              label: 'Flex Direction',
              property: 'flex-direction',
              default: 'row',
              options: [
                { id: 'row', label: 'Row' },
                { id: 'row-reverse', label: 'Row Reverse' },
                { id: 'column', label: 'Column' },
                { id: 'column-reverse', label: 'Column Reverse' },
              ],
            },
            {
              type: 'select',
              label: 'Flex Wrap',
              property: 'flex-wrap',
              default: 'nowrap',
              options: [
                { id: 'nowrap', label: 'No Wrap' },
                { id: 'wrap', label: 'Wrap' },
                { id: 'wrap-reverse', label: 'Wrap Reverse' },
              ],
            },
            {
              type: 'select',
              label: 'Justify Content',
              property: 'justify-content',
              default: 'flex-start',
              options: [
                { id: 'flex-start', label: 'Flex Start' },
                { id: 'flex-end', label: 'Flex End' },
                { id: 'center', label: 'Center' },
                { id: 'space-between', label: 'Space Between' },
                { id: 'space-around', label: 'Space Around' },
                { id: 'space-evenly', label: 'Space Evenly' },
              ],
            },
            {
              type: 'select',
              label: 'Align Items',
              property: 'align-items',
              default: 'stretch',
              options: [
                { id: 'stretch', label: 'Stretch' },
                { id: 'flex-start', label: 'Flex Start' },
                { id: 'flex-end', label: 'Flex End' },
                { id: 'center', label: 'Center' },
                { id: 'baseline', label: 'Baseline' },
              ],
            },
            {
              type: 'select',
              label: 'Align Content',
              property: 'align-content',
              default: 'stretch',
              options: [
                { id: 'stretch', label: 'Stretch' },
                { id: 'flex-start', label: 'Flex Start' },
                { id: 'flex-end', label: 'Flex End' },
                { id: 'center', label: 'Center' },
                { id: 'space-between', label: 'Space Between' },
                { id: 'space-around', label: 'Space Around' },
              ],
            },
          ],
        },
      ],
    },
    traitManager: {
      appendTo: '.traits-container',
    },
    storageManager: {
      type: 'local', // Type of the storage, available: 'local' | 'remote'
      autosave: true, // Store data automatically
      autoload: true, // Autoload stored data on init
      stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      options: {
        local: { // Options for the `local` type
          key: 'gjsProject', // The key for the local storage
        },
      }
    }
    
  });

  blocks.forEach(block => editor.BlockManager.add(block.id, block));
  
  

  
  
  
  editor.on('component:add', (model) => {
    console.log('Component added:', model);
    if (model.is('type', 'responsive-navbar')) {
      const toggleButton = model.view.el.querySelector('#navbar-toggle');
      const menu = model.view.el.querySelector('#navbar-menu');
  
      console.log('Toggle Button:', toggleButton);
      console.log('Menu:', menu);
  
      if (toggleButton && menu) {
        toggleButton.addEventListener('click', () => {
          console.log('Toggle Button Clicked');
          menu.classList.toggle('active');
        });
      }
    }
  });
  
  
  // editor.on('load', () => {
  //   const navbar = editor.getComponents().find(cmp => cmp.get('type') === 'navbar');
  
  //   if (navbar) {
  //     const leftSection = navbar.find(el => el.get('class') === 'navbar-nav-menu');
  //     if (leftSection) {
  //       leftSection.append(`
  //         <img src="path/to/your/image.png" alt="Logo" style="height: 50px;"/>
  //       `);
  //     }
  //   }
  // });
  
  
  
  
  
  
  const um = editor.UndoManager;
  
  // Define the undo command
  editor.Commands.add('undo', {
    run(editor) {
      if (um.hasUndo()) {
        um.undo();
      }
    },
  });
  
  // Define the redo command
  editor.Commands.add('redo', {
    run(editor) {
      if (um.hasRedo()) {
        um.redo();
      }
    },
  });
  
  // Define the clear-all command
  editor.Commands.add('clear-all', {
    run(editor) {
      if (confirm('Are you sure you want to clear all content?')) {
        editor.setComponents(''); // Clear all components
        editor.setStyle(''); // Clear all styles
        um.clear(); // Clear the undo stack
      }
    },
  });
  
  editor.Commands.add('set-device-desktop', {
    run: editor => editor.setDevice('Desktop')
    
  });
  editor.Commands.add('set-device-mobile', {
    run: editor => editor.setDevice('Mobile')
  });
  editor.Commands.add('set-device-tablet', {
    run: editor => editor.setDevice('Tablet')
  });
  
  editor.Commands.add('show-traits', {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest('.editor-row');
      return row.querySelector('.traits-container');
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = '';
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = 'none';
    },
  });
  
  editor.Commands.add('show-layers', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getLayersEl(row) { return row.querySelector('.layers-container') },
  
    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = '';
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = 'none';
    },
  });
  editor.Commands.add('show-styles', {
    getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
    getStyleEl(row) { return row.querySelector('.styles-container') },
  
    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = '';
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = 'none';
    },
  });
  
  
  
  editor.Commands.add('show-blocks', {
    getRowEl(editor) { 
      return editor.getContainer().closest('.editor-row'); 
    },
    getBlocksEl(row) { 
      return row.querySelector('.block-container'); 
    },
  
    run(editor, sender) {
      const blocksEl = this.getBlocksEl(this.getRowEl(editor));
      blocksEl.style.display = ''; // Show the blocks container
    },
    stop(editor, sender) {
      const blocksEl = this.getBlocksEl(this.getRowEl(editor));
      blocksEl.style.display = 'none'; // Hide the blocks container
    },
  });
  
  
  
  
  
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
        {
            id: 'visibility',
            active: true,
            className: 'fa fa-square-o',
            command: 'sw-visibility',
        }, {
            id: 'export',
            className: 'btn-open-export',
            label: 'Exp',
            command: 'export-template',
            context: 'export-template',
        }, {
            id: 'show-json',
            className: 'btn-show-json',
            label: 'JSON',
            context: 'show-json',
            command(editor) {
                editor.Modal.setTitle('Components JSON')
                    .setContent(`<textarea style="width:100%; height: 250px;">
                      ${JSON.stringify(editor.getComponents())}
                    </textarea>`)
                    .open();
            },
        },
       {
    id: 'download',
    className: 'btn-download',
    label: 'Download',
    command(editor) {
      const content = editor.getHtml();
      const style = editor.getCss();
      const fullContent = `
        <html>
          <head>
            <style>${style}</style>
          </head>
          <body>${content}</body>
        </html>
      `;
  
      const blob = new Blob([fullContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'template.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
  },
  {
    id: 'import',
    className: 'btn-import',
    label: 'Import',
    command: 'open-import-dialog',
    context: 'import-template'
  }
  
   
    ],
  });
  
  editor.Commands.add('open-import-dialog', {
    run(editor, sender) {
      sender && sender.set('active', 0);
      const modal = editor.Modal;
      const container = document.createElement('div');
      container.innerHTML = `
        <div style="margin: 10px;">
          <textarea id="import-area" style="width:100%;resize: vertical; height: 250px;"></textarea>
          <button id="import-btn" class="import-btn" style="margin-top:20px;">Import</button>
        </div>
        <style>
        .import-btn {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 10px 24px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
    
        .import-btn:hover {
          background-color: #45a049;
        }
        
        </style
      `;
      modal.setTitle('Import Template').setContent(container).open();
  
      document.getElementById('import-btn').onclick = () => {
        const code = document.getElementById('import-area').value;
        const parserHtml = editor.Panels.getButton('views', 'open-code');
        editor.setComponents(code);
        modal.close();
      };
    }
  });
  
  