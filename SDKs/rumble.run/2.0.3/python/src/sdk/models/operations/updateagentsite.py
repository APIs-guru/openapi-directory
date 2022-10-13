from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAgentSitePathParams:
    agent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAgentSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAgentSiteRequest:
    path_params: UpdateAgentSitePathParams = field(default=None)
    request: shared.AgentSiteID = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAgentSiteSecurity = field(default=None)
    

@dataclass
class UpdateAgentSiteResponse:
    agent: Optional[shared.Agent] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
