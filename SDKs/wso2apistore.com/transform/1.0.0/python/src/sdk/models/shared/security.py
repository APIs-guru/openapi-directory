from dataclasses import dataclass, field



@dataclass
class SchemeDefault:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
