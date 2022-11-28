from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveWirelessLanPathParams:
    wireless_id: str = field(metadata={'path_param': { 'field_name': 'wireless_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWirelessLanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveWirelessLanRequest:
    path_params: RemoveWirelessLanPathParams = field()
    security: RemoveWirelessLanSecurity = field()
    

@dataclass
class RemoveWirelessLanResponse:
    content_type: str = field()
    status_code: int = field()
    
