from dataclasses import dataclass, field



@dataclass
class SchemeAzureAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    azure_auth: SchemeAzureAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
