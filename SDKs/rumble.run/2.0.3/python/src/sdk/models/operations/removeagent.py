from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAgentPathParams:
    agent_id: str = field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAgentSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAgentRequest:
    path_params: RemoveAgentPathParams = field()
    security: RemoveAgentSecurity = field()
    

@dataclass
class RemoveAgentResponse:
    content_type: str = field()
    status_code: int = field()
    
