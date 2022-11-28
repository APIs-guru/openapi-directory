from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpgradeAgentPathParams:
    agent_id: str = field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpgradeAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpgradeAgentRequest:
    path_params: UpgradeAgentPathParams = field()
    security: UpgradeAgentSecurity = field()
    

@dataclass
class UpgradeAgentResponse:
    content_type: str = field()
    status_code: int = field()
    
