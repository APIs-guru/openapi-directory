from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDellSwitchSnmpConfigPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDellSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDellSwitchSnmpConfigRequest:
    path_params: UpdateDellSwitchSnmpConfigPathParams = field()
    security: UpdateDellSwitchSnmpConfigSecurity = field()
    request: Optional[shared.SnmpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDellSwitchSnmpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    
