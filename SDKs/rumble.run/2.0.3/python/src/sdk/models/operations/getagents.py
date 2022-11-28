from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAgentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAgentsRequest:
    security: GetAgentsSecurity = field()
    

@dataclass
class GetAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    agents: Optional[List[shared.Agent]] = field(default=None)
    
