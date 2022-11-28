from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountAgentsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountAgentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountAgentsRequest:
    query_params: GetAccountAgentsQueryParams = field()
    security: GetAccountAgentsSecurity = field()
    

@dataclass
class GetAccountAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    agents: Optional[List[shared.Agent]] = field(default=None)
    
