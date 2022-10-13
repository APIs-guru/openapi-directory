from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAristaSwitchSnmpConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAristaSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateAristaSwitchSnmpConfigRequest:
    path_params: UpdateAristaSwitchSnmpConfigPathParams = field(default=None)
    request: Optional[shared.SnmpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAristaSwitchSnmpConfigSecurity = field(default=None)
    

@dataclass
class UpdateAristaSwitchSnmpConfigResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    status_code: int = field(default=None)
    
