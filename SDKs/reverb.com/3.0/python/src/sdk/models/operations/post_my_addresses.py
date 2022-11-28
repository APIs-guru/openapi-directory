from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostMyAddressesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyAddressesRequest:
    security: PostMyAddressesSecurity = field()
    

@dataclass
class PostMyAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    
