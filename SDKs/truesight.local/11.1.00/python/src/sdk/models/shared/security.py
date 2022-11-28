from dataclasses import dataclass, field



@dataclass
class SchemeCookie:
    api_key: str = field(metadata={'security': { 'field_name': 'Cookie' }})
    
