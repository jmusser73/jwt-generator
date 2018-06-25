var nJwt = require('njwt');

const _SIGNING_KEY = "c1a41s-c4v0!";
const _SIGNING_HASH = "HS256";

function encode() {
    
    
    var payload = {
        facility: "123",
        encounter: "456",
        audit_id: "59444a5887f41c282822ffcc",
        given_name: "Jeff",
        family_name: "Musser",
        iss: "https://claris.cavo.io",
        iat: 1529939468,
        exp: 1529950268
       }
    
    var jwt = nJwt.create(payload, _SIGNING_KEY, _SIGNING_HASH);
    var token = jwt.compact();
    
    console.log(token);

    return token;
};

function decode(jwt) {
    // Insert Generated JWT Here
    var validJwt = nJwt.verify(jwt, _SIGNING_KEY, _SIGNING_HASH);
    console.log(validJwt);
}

let jwt = encode();
decode(jwt);
