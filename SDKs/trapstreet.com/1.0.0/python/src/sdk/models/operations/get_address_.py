from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressRequest:
    path_params: GetAddressPathParams = field()
    

@dataclass
class GetAddressResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_200_application_json_any: Optional[Any] = field(default=None)
    
