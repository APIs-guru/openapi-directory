from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCheckpointFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCheckpointFirewallRequest:
    path_params: UpdateCheckpointFirewallPathParams = field(default=None)
    request: Optional[shared.SwitchDataSource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCheckpointFirewallSecurity = field(default=None)
    

@dataclass
class UpdateCheckpointFirewallResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
