from dataclasses import dataclass, field



@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeOAuth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
