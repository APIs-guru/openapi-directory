from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressRequest:
    path_params: GetAddressPathParams = field(default=None)
    

@dataclass
class GetAddressResponse:
    content_type: str = field(default=None)
    get_address_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
