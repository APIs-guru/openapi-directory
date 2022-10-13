from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCiscoSwitchSnmpConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCiscoSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCiscoSwitchSnmpConfigRequest:
    path_params: GetCiscoSwitchSnmpConfigPathParams = field(default=None)
    security: GetCiscoSwitchSnmpConfigSecurity = field(default=None)
    

@dataclass
class GetCiscoSwitchSnmpConfigResponse:
    content_type: str = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    status_code: int = field(default=None)
    
