from dataclasses import dataclass, field



@dataclass
class SchemeAPIPubKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeAPISecretKey:
    api_key: str = field(metadata={'security': { 'field_name': 'x-api-key' }})
    

@dataclass
class SchemeWsSecretKey:
    api_key: str = field(metadata={'security': { 'field_name': 'x-token' }})
    
