from dataclasses import dataclass, field



@dataclass
class SchemeApikey:
    api_key: str = field(metadata={'security': { 'field_name': 'apikey' }})
    
