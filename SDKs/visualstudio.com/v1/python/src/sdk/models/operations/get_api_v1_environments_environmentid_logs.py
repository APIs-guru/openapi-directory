from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDLogsPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDLogsRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDLogsPathParams = field(default=None)
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDLogsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_api_v1_environments_environment_id_logs_200_application_json_string: Optional[str] = field(default=None)
    get_api_v1_environments_environment_id_logs_200_text_json_string: Optional[str] = field(default=None)
    get_api_v1_environments_environment_id_logs_200_text_plain_string: Optional[str] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
