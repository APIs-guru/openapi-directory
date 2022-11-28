from dataclasses import dataclass, field



@dataclass
class SchemeRhIdentity:
    api_key: str = field(metadata={'security': { 'field_name': 'x-rh-identity' }})
    
