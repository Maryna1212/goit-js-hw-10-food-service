const refs = {
    body: document.body,
    switchInput: document.querySelector('#theme-switch-toggle'),
    ulMenu: document.querySelector('.js-menu'),
};

refs.switchInput.addEventListener('change', onSwitchInputChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onSwitchInputChange(event) {
    event.target.checked ? enableDarkTheme() : enableLightTheme();
}

function toggleTheme(add, remove) {
    refs.body.classList.add(add);
    refs.body.classList.remove(remove);
    localStorage.setItem('theme', add);
}

function enableDarkTheme() {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    refs.switchInput.checked = true;
}

function enableLightTheme() {
    toggleTheme(Theme.LIGHT, Theme.DARK);
    refs.switchInput.checked = false;
}