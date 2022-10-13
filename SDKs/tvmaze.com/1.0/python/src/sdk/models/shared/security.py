from dataclasses import dataclass, field



@dataclass
class SchemeUsertoken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    usertoken: SchemeUsertoken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
