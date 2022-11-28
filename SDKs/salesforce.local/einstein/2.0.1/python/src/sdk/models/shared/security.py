from dataclasses import dataclass, field



@dataclass
class SchemeBearerToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
