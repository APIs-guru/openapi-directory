from dataclasses import dataclass, field



@dataclass
class SchemeBasicScheme:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    basic_scheme: SchemeBasicScheme = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
