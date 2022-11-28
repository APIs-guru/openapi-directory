from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCheckpointFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCheckpointFirewallRequest:
    path_params: UpdateCheckpointFirewallPathParams = field()
    security: UpdateCheckpointFirewallSecurity = field()
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCheckpointFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
