from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAristaSwitchSnmpConfigPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAristaSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAristaSwitchSnmpConfigRequest:
    path_params: GetAristaSwitchSnmpConfigPathParams = field()
    security: GetAristaSwitchSnmpConfigSecurity = field()
    

@dataclass
class GetAristaSwitchSnmpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    
