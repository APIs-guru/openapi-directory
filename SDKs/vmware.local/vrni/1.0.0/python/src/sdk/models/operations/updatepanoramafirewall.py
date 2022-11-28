from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePanoramaFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePanoramaFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePanoramaFirewallRequest:
    path_params: UpdatePanoramaFirewallPathParams = field()
    security: UpdatePanoramaFirewallSecurity = field()
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePanoramaFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
