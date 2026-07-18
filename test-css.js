fetch('https://multi-zone-host-shell.vercel.app/shop')
  .then(r => r.text())
  .then(html => {
    const matches = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/g);
    console.log(matches ? matches.join('\n') : 'No stylesheets found');
  });
