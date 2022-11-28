from dataclasses import dataclass, field



@dataclass
class SchemeBearer:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    bearer: SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SchemeApikey:
    api_key: str = field(metadata={'security': { 'field_name': 'Ocp-Apim-Subscription-Key' }})
    
