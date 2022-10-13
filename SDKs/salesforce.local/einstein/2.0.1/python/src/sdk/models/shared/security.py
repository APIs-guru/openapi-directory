from dataclasses import dataclass, field



@dataclass
class SchemeBearerToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
