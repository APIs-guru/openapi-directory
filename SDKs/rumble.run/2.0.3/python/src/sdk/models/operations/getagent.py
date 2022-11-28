from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAgentPathParams:
    agent_id: str = field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = field()
    security: GetAgentSecurity = field()
    

@dataclass
class GetAgentResponse:
    content_type: str = field()
    status_code: int = field()
    agent: Optional[shared.Agent] = field(default=None)
    
