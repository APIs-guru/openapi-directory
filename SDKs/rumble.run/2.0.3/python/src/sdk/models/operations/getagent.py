from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAgentPathParams:
    agent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = field(default=None)
    security: GetAgentSecurity = field(default=None)
    

@dataclass
class GetAgentResponse:
    agent: Optional[shared.Agent] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
