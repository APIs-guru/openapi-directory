from dataclasses import dataclass, field



@dataclass
class SchemeApikey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'apikey' }})
    
