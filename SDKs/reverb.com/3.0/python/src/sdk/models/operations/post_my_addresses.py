from dataclasses import dataclass, field



@dataclass
class PostMyAddressesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyAddressesRequest:
    security: PostMyAddressesSecurity = field(default=None)
    

@dataclass
class PostMyAddressesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
