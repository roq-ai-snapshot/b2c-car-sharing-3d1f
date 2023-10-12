interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'End Customer',
    'Customer Service Representative',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read company information', 'Read car details', 'Read location details', 'View bookings'],
  ownerAbilities: ['Manage user information', 'Manage company information', 'Manage car details', 'Manage bookings'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/d654d547-4131-4988-9c89-247953626e5f',
};
