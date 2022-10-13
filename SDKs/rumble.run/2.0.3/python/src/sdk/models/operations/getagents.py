from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAgentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAgentsRequest:
    security: GetAgentsSecurity = field(default=None)
    

@dataclass
class GetAgentsResponse:
    agents: Optional[List[shared.Agent]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
