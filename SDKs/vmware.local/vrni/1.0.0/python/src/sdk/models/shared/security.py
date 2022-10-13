from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
