from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCheckpointFirewallPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCheckpointFirewallSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCheckpointFirewallRequest:
    path_params: GetCheckpointFirewallPathParams = field()
    security: GetCheckpointFirewallSecurity = field()
    

@dataclass
class GetCheckpointFirewallResponse:
    content_type: str = field()
    status_code: int = field()
    switch_data_source: Optional[shared.SwitchDataSource] = field(default=None)
    
