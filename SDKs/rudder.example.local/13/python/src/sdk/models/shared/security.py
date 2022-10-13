from dataclasses import dataclass, field



@dataclass
class SchemeAPITokens:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-API-Token' }})
    

@dataclass
class Security:
    api_tokens: SchemeAPITokens = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
