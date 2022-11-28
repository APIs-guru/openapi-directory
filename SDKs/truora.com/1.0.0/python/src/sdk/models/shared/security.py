from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Truora-API-Key' }})
    

@dataclass
class Security:
    api_key: SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
