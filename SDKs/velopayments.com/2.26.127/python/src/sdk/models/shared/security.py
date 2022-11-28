from dataclasses import dataclass, field



@dataclass
class SchemeOAuth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    o_auth2: SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeOAuthVeloBackOffice:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
