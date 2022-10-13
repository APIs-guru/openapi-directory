from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDQueryParams:
    deletion_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deletionType', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDRequest:
    path_params: DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDPathParams = field(default=None)
    query_params: DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDQueryParams = field(default=None)
    

@dataclass
class DeleteAPIV1GenevaActionsEnvironmentsEnvironmentIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
