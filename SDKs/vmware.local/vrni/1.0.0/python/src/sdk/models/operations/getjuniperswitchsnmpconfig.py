from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJuniperSwitchSnmpConfigPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJuniperSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetJuniperSwitchSnmpConfigRequest:
    path_params: GetJuniperSwitchSnmpConfigPathParams = field()
    security: GetJuniperSwitchSnmpConfigSecurity = field()
    

@dataclass
class GetJuniperSwitchSnmpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    
