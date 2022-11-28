from dataclasses import dataclass, field



@dataclass
class SchemeUsertoken:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class Security:
    usertoken: SchemeUsertoken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
