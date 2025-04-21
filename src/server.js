const inquirer = require('inquirer');

(async () => {
  const { role } = await inquirer.prompt([
    {
        type: 'rawlist',           // <— was 'list'
        name: 'role',
        message: 'Choose the actor to simulate:',
        choices: [
          { name: 'Wallet',              value: 'wallet' },
          { name: 'Credential Provider', value: 'credential‑provider' },
          { name: 'Relying Party',       value: 'relying‑party' }
      ]
    }
  ]);

  // Dynamically load and start the chosen role
  const { start } = require(`./roles/${role}`);
  await start();
})();
