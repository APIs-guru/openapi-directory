from dataclasses import dataclass, field



@dataclass
class SchemeSakariAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
