from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortRequest:
    path_params: DeleteAPIV1EnvironmentsEnvironmentIDPortsPortPathParams = field()
    

@dataclass
class DeleteAPIV1EnvironmentsEnvironmentIDPortsPortResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message_codes: Optional[int] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
