from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutMyAddressesAddressIDPathParams:
    address_id: str = field(metadata={'path_param': { 'field_name': 'address_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyAddressesAddressIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyAddressesAddressIDRequest:
    path_params: PutMyAddressesAddressIDPathParams = field()
    security: PutMyAddressesAddressIDSecurity = field()
    

@dataclass
class PutMyAddressesAddressIDResponse:
    content_type: str = field()
    status_code: int = field()
    
