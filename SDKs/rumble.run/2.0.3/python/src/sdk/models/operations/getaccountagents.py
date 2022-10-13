from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountAgentsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountAgentsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountAgentsRequest:
    query_params: GetAccountAgentsQueryParams = field(default=None)
    security: GetAccountAgentsSecurity = field(default=None)
    

@dataclass
class GetAccountAgentsResponse:
    agents: Optional[List[shared.Agent]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
