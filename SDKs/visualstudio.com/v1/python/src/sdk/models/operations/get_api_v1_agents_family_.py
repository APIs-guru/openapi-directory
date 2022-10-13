from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1AgentsFamilyPathParams:
    family: str = field(default=None, metadata={'path_param': { 'field_name': 'family', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1AgentsFamilyRequest:
    path_params: GetAPIV1AgentsFamilyPathParams = field(default=None)
    

@dataclass
class GetAPIV1AgentsFamilyResponse:
    agent_response: Optional[shared.AgentResponse] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
