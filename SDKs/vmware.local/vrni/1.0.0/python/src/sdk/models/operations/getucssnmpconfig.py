from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUcsSnmpConfigPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUcsSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUcsSnmpConfigRequest:
    path_params: GetUcsSnmpConfigPathParams = field()
    security: GetUcsSnmpConfigSecurity = field()
    

@dataclass
class GetUcsSnmpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    
