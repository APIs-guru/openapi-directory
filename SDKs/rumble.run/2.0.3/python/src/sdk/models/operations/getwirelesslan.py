from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWirelessLanPathParams:
    wireless_id: str = field(metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWirelessLanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWirelessLanRequest:
    path_params: GetWirelessLanPathParams = field()
    security: GetWirelessLanSecurity = field()
    

@dataclass
class GetWirelessLanResponse:
    content_type: str = field()
    status_code: int = field()
    wireless: Optional[shared.Wireless] = field(default=None)
    
