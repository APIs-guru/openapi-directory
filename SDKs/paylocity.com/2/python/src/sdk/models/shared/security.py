from dataclasses import dataclass, field



@dataclass
class SchemePaylocityAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
