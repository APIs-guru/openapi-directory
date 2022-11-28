from dataclasses import dataclass, field



@dataclass
class SchemeJwt:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
