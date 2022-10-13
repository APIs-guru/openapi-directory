from dataclasses import dataclass, field



@dataclass
class SchemeAuth:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
