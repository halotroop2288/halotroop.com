// https://chaos.social/@jaseg/110781307230828144
// Tell anti-ad blocking DRM users to use a different browser
if (navigator.getEnvironmentIntegrity !== undefined) {
    document.querySelector('body').innerHTML = '<h1>Your browser contains Google DRM</h1><p>"Web Environment Integrity" is a Google euphemism for a DRM that is designed to prevent ad-blocking.<br>In support of an open web, this website does not function with this DRM.<br>Please install a browser such as <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> that respects your freedom and supports ad blockers.</p>';
}
