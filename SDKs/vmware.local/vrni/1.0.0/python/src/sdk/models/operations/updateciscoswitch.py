from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCiscoSwitchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCiscoSwitchSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCiscoSwitchRequest:
    path_params: UpdateCiscoSwitchPathParams = field()
    security: UpdateCiscoSwitchSecurity = field()
    request: Optional[shared.CiscoSwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCiscoSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    cisco_switch_data_source: Optional[shared.CiscoSwitchDataSource] = field(default=None)
    
