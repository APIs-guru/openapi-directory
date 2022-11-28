from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAristaSwitchSnmpConfigPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAristaSwitchSnmpConfigSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateAristaSwitchSnmpConfigRequest:
    path_params: UpdateAristaSwitchSnmpConfigPathParams = field()
    security: UpdateAristaSwitchSnmpConfigSecurity = field()
    request: Optional[shared.SnmpConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAristaSwitchSnmpConfigResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    snmp_config: Optional[shared.SnmpConfig] = field(default=None)
    
