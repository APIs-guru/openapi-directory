from dataclasses import dataclass, field



@dataclass
class SchemeSakariAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
