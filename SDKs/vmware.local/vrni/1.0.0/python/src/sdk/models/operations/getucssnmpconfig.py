from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUcsSnmpConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUcsSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUcsSnmpConfigRequest:
    path_params: GetUcsSnmpConfigPathParams = field(default=None)
    security: GetUcsSnmpConfigSecurity = field(default=None)
    

@dataclass
class GetUcsSnmpConfigResponse:
    content_type: str = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    status_code: int = field(default=None)
    
