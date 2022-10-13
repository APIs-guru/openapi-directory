from dataclasses import dataclass, field



@dataclass
class SchemeApikey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Ocp-Apim-Subscription-Key' }})
    

@dataclass
class SchemeBearer:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    bearer: SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
