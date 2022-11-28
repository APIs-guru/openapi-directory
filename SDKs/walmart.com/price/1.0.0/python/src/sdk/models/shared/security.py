from dataclasses import dataclass, field



@dataclass
class SchemeBasicScheme:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class Security:
    basic_scheme: SchemeBasicScheme = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
