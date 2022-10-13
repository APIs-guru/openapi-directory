from dataclasses import dataclass, field



@dataclass
class PutMyAddressesAddressIDPathParams:
    address_id: str = field(default=None, metadata={'path_param': { 'field_name': 'address_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutMyAddressesAddressIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyAddressesAddressIDRequest:
    path_params: PutMyAddressesAddressIDPathParams = field(default=None)
    security: PutMyAddressesAddressIDSecurity = field(default=None)
    

@dataclass
class PutMyAddressesAddressIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
