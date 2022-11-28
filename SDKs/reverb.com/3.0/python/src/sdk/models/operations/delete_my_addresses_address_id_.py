from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteMyAddressesAddressIDPathParams:
    address_id: str = field(metadata={'path_param': { 'field_name': 'address_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyAddressesAddressIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyAddressesAddressIDRequest:
    path_params: DeleteMyAddressesAddressIDPathParams = field()
    security: DeleteMyAddressesAddressIDSecurity = field()
    

@dataclass
class DeleteMyAddressesAddressIDResponse:
    content_type: str = field()
    status_code: int = field()
    
