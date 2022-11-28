from dataclasses import dataclass, field



@dataclass
class SchemePaylocityAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
