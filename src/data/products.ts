export const products: { icon?: string, title?: string , bigTitle?: string, 
  titleChildren?: (string | { title: string, 
  children: (string | { title: string, 
  children: (string | {title: string, 
  children: string[] })[] })[] })[] }[] = [
  {
  bigTitle: 'Apps',
},
{
  icon: 'mdi mdi-gauge',
  title: 'Dashboard',
  titleChildren: ['Analytical', 'eCommerce', 'Crypto']
},
{
  icon: 'mdi mdi-calendar',
  title: 'Calendar',
},
{
  icon: 'mdi mdi-account-multiple-outline',
  title: 'Contacts',
},
{
  icon: 'mdi mdi-image-multiple-outline',
  title: 'Gallery',
},
{
  icon: 'mdi mdi-view-dashboard-outline',
  title: 'Cards',
},
{
  icon: 'mdi mdi-email-outline',
  title: 'Mail',
},
{
  icon: 'mdi mdi-cart-outline',
  title: 'eCommerce',
  titleChildren: ['Analytical', 'eCommerce', 'Crypto']
},
{
  bigTitle: 'User interface',
},
{
  icon: 'mdi mdi-view-compact-outline',
  title: 'Layout',
  titleChildren: ['Flexbox', 'Blank page', 'Page headers', "Sidebar right", "Sidebar left", "Tabbed page"]
  
},
{
  icon: 'mdi mdi-format-color-fill',
  title: 'Themes',
},
{
  icon: 'mdi mdi-menu',
  title: 'Multi level menu',
  titleChildren: [ 'item one (1)', 'item two (2)', 'item three (3)',
    {
      title: 'item four (4)',
      children: [
        {
          title: 'item one (4.1)',
          children: ['item one (4.1.1)', 'item one (4.1.2)', 'item one (4.1.3)'],
        },
        
        {
          title: 'item one (4.2)',
          children: ['item two (4.2.1)', 'item two (4.2.2)', 'item two (4.2.3)'],
        },
        'item one (4-3)',
        'item one (4-4)',
        'item one(4-5)',
        'item one(4-6)',
        'item one(4-7)'
      ]
    }
  ],
},
{
  icon: 'mdi mdi-folder-star-outline',
  title: 'Icons',
},
{
  icon: 'mdi mdi-translate',
  title: 'Multi language',
},
{
  icon: 'mdi mdi-format-font',
  title: 'Typography',
},
{
  icon: 'mdi mdi-help-circle-outline',
  title: 'Helper Classes',
},
{
  icon: 'mdi mdi-shape-outline',
  title: 'Element',
  titleChildren: ['Button', 'Radio', 'Checkbox', "Input", "Input Number", "Select", "Cascader", "Switch", "Slider", "Time Picker", "Date Picker", "Date Time Picker", "Upload", "Rate", "Color Picker", "Transfer", "Form", "Tag", "Progress", "Tree", "Pagination", "Badge", "Alert", "Loading", "Message", "Message Box", "Notifitacion", "NavMenu", "Tabs", "Breadcrumb", "Dropdown", "Steps", "Dialog", "Tooltip", "Popover", "Card", "Carousel", "Collapse", "Timeline"]
},
{
  bigTitle: 'Components',
},
{
  icon: 'mdi mdi-table',
  title: 'Tables',
  titleChildren: ['Basic Table', 'Element UI', 'TUI Grid']
},
{
  icon: 'mdi mdi-map-outline',
  title: 'Maps',
  titleChildren: ['Leaflet', 'Mapbox']
},
{
  icon: 'mdi mdi-pencil-box-outline',
  title: 'Editors',
  titleChildren: ['Quill', 'Pell', 'Markdown']
},
{
  icon: 'mdi mdi-chart-line',
  title: 'Charts',
  titleChildren: ['Vue Chartkick', 'Peity', 'Echarts']
},
{
  bigTitle: 'Pages',
},
{
  icon: 'mdi mdi-card-account-details-outline',
  title: 'Profile',
},
{
  icon: 'mdi mdi-lock-outline',
  title: 'Authentication',
  titleChildren: ['Login', 'Login 2', 'Register', 'Forgot Password']
},
{
  icon: 'mdi mdi-file-document-edit-outline',
  title: 'Invoice',
},
{
  icon: 'mdi mdi-alert-octagon-outline',
  title: '404',
},
];