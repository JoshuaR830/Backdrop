var root; 
window.addEventListener('load', function() {
    root = document.documentElement;
});

function darkTheme() {
    root.style.setProperty('--primary', '#540078');
    root.style.setProperty('--primary-variant', '#9200d1');
    root.style.setProperty('--on-primary', '#ffffff');

    root.style.setProperty('--secondary', '#1AC5CD');
    root.style.setProperty('--secondary-variant', '#008185');
    root.style.setProperty('--on-secondary', '#ffffff');

    root.style.setProperty('--background', '#540078');
    root.style.setProperty('--on-background', '#ffffff');

    root.style.setProperty('--surface', '#674084');
    root.style.setProperty('--on-surface', '#ffffff');

    root.style.setProperty('--error', '#b53a3a');
    root.style.setProperty('--on-error', '#ffffff');
} 

function blackTheme() {
    root.style.setProperty('--primary', '#121212');
    root.style.setProperty('--primary-variant', '#373737');
    root.style.setProperty('--on-primary', '#ffffff');

    root.style.setProperty('--secondary', '#ce9fd6');
    root.style.setProperty('--secondary-variant', '#c77fd4');
    root.style.setProperty('--on-secondary', '#ffffff');

    root.style.setProperty('--background', '#121212');
    root.style.setProperty('--on-background', '#ffffff');

    root.style.setProperty('--surface', '#1d1d1d');
    root.style.setProperty('--on-surface', '#ffffff');

    root.style.setProperty('--error', '#d1524b');
    root.style.setProperty('--on-error', '#ffffff');
} 

function lightTheme() {
    root.style.setProperty('--primary', '#8b4cb5');
    root.style.setProperty('--primary-variant', '#B680D1');
    root.style.setProperty('--on-primary', '#ffffff');

    root.style.setProperty('--secondary', '#00b9c7');
    root.style.setProperty('--secondary-variant', '#008084');
    root.style.setProperty('--on-secondary', '#ffffff');

    root.style.setProperty('--background', '#8b4cb5');
    root.style.setProperty('--on-background', '#ffffff');

    root.style.setProperty('--surface', '#ffffff');
    root.style.setProperty('--on-surface', '#000000');

    root.style.setProperty('--error', '#ff0000');
    root.style.setProperty('--on-error', '#780018');
}

function defaultTheme() {
    root.style.setProperty('--primary', '#8b4cb5');
    root.style.setProperty('--primary-variant', '#B680D1');
    root.style.setProperty('--on-primary', '#ffffff');

    root.style.setProperty('--secondary', '#7d0080');
    root.style.setProperty('--secondary-variant', '#b54cab');
    root.style.setProperty('--on-secondary', '#ffffff');

    root.style.setProperty('--background', '#4d4654');
    root.style.setProperty('--on-background', '#ffffff');

    root.style.setProperty('--surface', '#635870');
    root.style.setProperty('--on-surface', '#ffffff');

    root.style.setProperty('--error', '#B00020');
    root.style.setProperty('--on-error', '#ed323b');
}

function themeSwitcher() {

}
