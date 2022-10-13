from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequests:
    create_environment_state_change_body: Optional[shared.CreateEnvironmentStateChangeBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_environment_state_change_body1: Optional[shared.CreateEnvironmentStateChangeBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_environment_state_change_body2: Optional[shared.CreateEnvironmentStateChangeBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_environment_state_change_body3: Optional[shared.CreateEnvironmentStateChangeBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest:
    path_params: PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams = field(default=None)
    request: PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequests = field(default=None)
    

@dataclass
class PostAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    environment_state_change: Optional[shared.EnvironmentStateChange] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
