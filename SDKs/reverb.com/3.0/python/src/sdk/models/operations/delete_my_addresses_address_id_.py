from dataclasses import dataclass, field



@dataclass
class DeleteMyAddressesAddressIDPathParams:
    address_id: str = field(default=None, metadata={'path_param': { 'field_name': 'address_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyAddressesAddressIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyAddressesAddressIDRequest:
    path_params: DeleteMyAddressesAddressIDPathParams = field(default=None)
    security: DeleteMyAddressesAddressIDSecurity = field(default=None)
    

@dataclass
class DeleteMyAddressesAddressIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
