from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1AgentsFamilyPathParams:
    family: str = field(metadata={'path_param': { 'field_name': 'family', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1AgentsFamilyRequest:
    path_params: GetAPIV1AgentsFamilyPathParams = field()
    

@dataclass
class GetAPIV1AgentsFamilyResponse:
    content_type: str = field()
    status_code: int = field()
    agent_response: Optional[shared.AgentResponse] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
