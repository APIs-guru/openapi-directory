from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWirelessLanPathParams:
    wireless_id: str = field(default=None, metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWirelessLanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWirelessLanRequest:
    path_params: GetWirelessLanPathParams = field(default=None)
    security: GetWirelessLanSecurity = field(default=None)
    

@dataclass
class GetWirelessLanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wireless: Optional[shared.Wireless] = field(default=None)
    
