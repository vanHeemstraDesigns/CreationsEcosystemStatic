## Proxy

If you are behind a proxy, set it correctly in npm.

```
npm config set proxy http://proxyhostname:proxyport

npm config set https-proxy http://proxyhostname:proxyport
```

Try to disable ssl and set registry to http instead of https.

```
npm config set registry=http://registry.npmjs.org/
npm config set strict-ssl false
```

Note1: For SSL/https proxies the protocol in URL should be http not https.

Note2: If your set up is on Vagrant instance or a hosted VM use IP instead of hostname for proxy as it might not be resolvable.

## No Proxy

If there is no proxy , remove proxy config from npm

```
npm config set proxy null
npm config set https-proxy null
```
