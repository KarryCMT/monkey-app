// 注意为了兼容uni-app 需要将utils/jsencrypt.js替换jsencrypt/bin/jsencrypt.js后再打包 TODO: 更好的解决方法
import JSEncrypt from './jsencrypt.min.js';

let publicKey = `MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAL7DosDpZYx0KckBooLQ/+0xjkbvp9aS
JFZIxkcRExdLlbTuzliwiZKRrzWrJSSO6VZCOHOXI+PSsmwCyL3l3aECAwEAAQ==`;

let privateKey = `MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAvsOiwOlljHQpyQGi
gtD/7TGORu+n1pIkVkjGRxETF0uVtO7OWLCJkpGvNaslJI7pVkI4c5cj49KybALI
veXdoQIDAQABAkAcN5f1bRCmS/B6WRGOxBd3IGNpPr3W0VsqoC0kCfSG91fCunF3
hA4ZkQIWTYEWfJScsDS4OAML5yeEqi7hzfihAiEA6DTyH8kf7u4+95Z5UPg5tZme
+Q754XkpUdaK/w4WnaUCIQDST5ofKnzBXbs/5+Fn5nc9UN7/lHJJVnsFHGvPfzI3
TQIhALH7iy6z4YcpFBiAPOLEMK+yXTi3su6RCQvSb13KNamFAiAjNah750UTqnma
7VtTZcY4wb1T1Kp9lLjr1iJGjuj9UQIgQjmtRS+5f5pPn6LHOpqIuPSUfBjvTYsV
hdDJ44xs8M0=`;

export function setPublicKey(key: string) {
  publicKey = key;
}

export function setPrivateKey(key: string) {
  privateKey = key;
}

export function encrypt(pass: string, keySize?: number) {
  const encryptor = new JSEncrypt({default_key_size: keySize || 512});
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(pass);
}

export function decrypt(pass: string, keySize?: number) {
  const encryptor = new JSEncrypt({default_key_size: keySize || 512});
  encryptor.setPrivateKey(privateKey);
  return encryptor.decrypt(pass);
}
