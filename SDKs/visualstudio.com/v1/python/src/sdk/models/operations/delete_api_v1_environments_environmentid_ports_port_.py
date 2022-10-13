from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortRequest:
    path_params: DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams = field(default=None)
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
