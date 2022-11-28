from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesRequest:
    path_params: GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesPathParams = field()
    

@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDStateChangesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    environment_state_change: Optional[shared.EnvironmentStateChange] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
