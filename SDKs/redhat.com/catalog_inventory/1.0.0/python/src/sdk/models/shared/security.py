from dataclasses import dataclass, field



@dataclass
class SchemeUserSecurity:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    user_security: SchemeUserSecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
