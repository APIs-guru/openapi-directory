from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyAddressesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyAddressesRequest:
    security: GetMyAddressesSecurity = field()
    

@dataclass
class GetMyAddressesResponse:
    content_type: str = field()
    status_code: int = field()
    
