from dataclasses import dataclass, field



@dataclass
class SchemeAPITokens:
    api_key: str = field(metadata={'security': { 'field_name': 'X-API-Token' }})
    

@dataclass
class Security:
    api_tokens: SchemeAPITokens = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
