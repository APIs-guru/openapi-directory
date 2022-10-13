from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateUcsSnmpConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUcsSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUcsSnmpConfigRequest:
    path_params: UpdateUcsSnmpConfigPathParams = field(default=None)
    request: Optional[shared.SnmpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateUcsSnmpConfigSecurity = field(default=None)
    

@dataclass
class UpdateUcsSnmpConfigResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    status_code: int = field(default=None)
    
