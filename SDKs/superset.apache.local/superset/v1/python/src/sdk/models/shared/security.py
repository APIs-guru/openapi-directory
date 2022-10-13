from dataclasses import dataclass, field



@dataclass
class SchemeJwt:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeJwtRefresh:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
