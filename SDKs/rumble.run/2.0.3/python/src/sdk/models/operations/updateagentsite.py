from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAgentSitePathParams:
    agent_id: str = field(metadata={'path_param': { 'field_name': 'agent_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAgentSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAgentSiteRequest:
    path_params: UpdateAgentSitePathParams = field()
    request: shared.AgentSiteID = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAgentSiteSecurity = field()
    

@dataclass
class UpdateAgentSiteResponse:
    content_type: str = field()
    status_code: int = field()
    agent: Optional[shared.Agent] = field(default=None)
    
