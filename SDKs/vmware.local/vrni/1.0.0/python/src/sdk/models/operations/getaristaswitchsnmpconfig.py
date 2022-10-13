from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAristaSwitchSnmpConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAristaSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAristaSwitchSnmpConfigRequest:
    path_params: GetAristaSwitchSnmpConfigPathParams = field(default=None)
    security: GetAristaSwitchSnmpConfigSecurity = field(default=None)
    

@dataclass
class GetAristaSwitchSnmpConfigResponse:
    content_type: str = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    status_code: int = field(default=None)
    
