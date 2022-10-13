from dataclasses import dataclass, field



@dataclass
class GetMyAddressesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyAddressesRequest:
    security: GetMyAddressesSecurity = field(default=None)
    

@dataclass
class GetMyAddressesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
