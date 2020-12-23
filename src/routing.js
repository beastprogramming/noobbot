import React from "react";
import { Switch, Route } from 'react-router-dom';

// Import All Pages components
import Header from './components/menus/Header';
import App from './App'
// Domains
import {RegisterADomain, NewDomainExtension, NameSuggestionTool, WhoisLookup} from './pages/domains/index';
// Hosting
import {LinuxSharedHosting, WindowsSharedHosting, CloudHosting, DrupalHosting, JoomlaHosting, WordpressHosting} from './pages/hosting/index';
// VPS
import {LinuxVpsServer} from './pages/vps/index'
// Cloud
import {Cloud} from './pages/cloud/index'
// Servers
import {LinuxDedicatedServer, WindowsDedicatedServer, ManagedServer} from './pages/servers/index';
// Emails
import {BusinessEmail, EnterpriseEmail, GoogleWorkspace} from './pages/emails/index';
// Websites
import {Weebly, WebsiteBuilder, Themes, Plugins, Logos} from './pages/websites/index';
// Security & backups
import {SSLCertificates, Sitelock, Codeguard} from './pages/security-backups/index';
// Error
import NotFound404 from './pages/NotFound404'
// 13232
function Routing() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />

                <Route exact path="/domains/register-a-domain" component={RegisterADomain} />
                <Route exact path="/domains/new-domain-extentions" component={NewDomainExtension} />
                <Route exact path="/domains/name-suggestion-tool" component={NameSuggestionTool} />
                <Route exact path="/domains/whois-lookup" component={WhoisLookup} />

                <Route exact path="/hosting/linux-shared-hosting" component={LinuxSharedHosting} />
                <Route exact path="/hosting/windows-shared-hosting" component={WindowsSharedHosting} />
                <Route exact path="/hosting/cloud-hosting" component={CloudHosting} />
                <Route exact path="/hosting/drupal-hosting" component={DrupalHosting} />
                <Route exact path="/hosting/joomla-hosting" component={JoomlaHosting} />
                <Route exact path="/hosting/wordpress-hosting" component={WordpressHosting} />

                <Route exact path="/vps/linux-vps-server" component={LinuxVpsServer} />

                <Route exact path="/cloud" component={Cloud} />

                <Route exact path="/servers/linux-dedicated-server" component={LinuxDedicatedServer} />
                <Route exact path="/servers/windows-dedicated-server" component={WindowsDedicatedServer} />
                <Route exact path="/servers/managed-servers" component={ManagedServer} />

                <Route exact path="/emails/business-email" component={BusinessEmail} />
                <Route exact path="/emails/enterprise-email" component={EnterpriseEmail} />
                <Route exact path="/emails/google-workspace" component={GoogleWorkspace} />

                <Route exact path="/websites/weebly" component={Weebly} />
                <Route exact path="/websites/website-builder" component={WebsiteBuilder} />
                <Route exact path="/websites/themes" component={Themes} />
                <Route exact path="/websites/plugins" component={Plugins} />
                <Route exact path="/websites/logos" component={Logos} />

                <Route exact path="/security-backups/ssl-certificates" component={SSLCertificates} />
                <Route exact path="/security-backups/sitelock" component={Sitelock} />
                <Route exact path="/security-backups/codeguard" component={Codeguard} />

                <Route path="*" component={NotFound404} />
            </Switch>
        </>
    );
}

export default Routing;