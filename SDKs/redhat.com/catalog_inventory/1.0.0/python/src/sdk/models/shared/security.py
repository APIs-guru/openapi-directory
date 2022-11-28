from dataclasses import dataclass, field



@dataclass
class SchemeUserSecurity:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class Security:
    user_security: SchemeUserSecurity = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
