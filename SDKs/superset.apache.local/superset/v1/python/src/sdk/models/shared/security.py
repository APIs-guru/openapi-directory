from dataclasses import dataclass, field



@dataclass
class SchemeJwtRefresh:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeJwt:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
