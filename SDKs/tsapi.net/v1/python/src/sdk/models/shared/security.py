from dataclasses import dataclass, field



@dataclass
class SchemeBasic:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    basic: SchemeBasic = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
