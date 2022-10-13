from dataclasses import dataclass, field



@dataclass
class SchemeRhIdentity:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-rh-identity' }})
    
