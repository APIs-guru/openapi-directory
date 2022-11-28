from dataclasses import dataclass, field



@dataclass
class SchemeAzureAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    azure_auth: SchemeAzureAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
