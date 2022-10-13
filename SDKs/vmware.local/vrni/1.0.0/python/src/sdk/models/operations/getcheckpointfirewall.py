from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCheckpointFirewallPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCheckpointFirewallRequest:
    path_params: GetCheckpointFirewallPathParams = field(default=None)
    security: GetCheckpointFirewallSecurity = field(default=None)
    

@dataclass
class GetCheckpointFirewallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
