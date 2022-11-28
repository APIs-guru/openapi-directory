from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1GenevaActionsConfigurationTargetKeyPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    target: str = field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1GenevaActionsConfigurationTargetKeyRequest:
    path_params: GetAPIV1GenevaActionsConfigurationTargetKeyPathParams = field()
    

@dataclass
class GetAPIV1GenevaActionsConfigurationTargetKeyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    system_configuration_response: Optional[shared.SystemConfigurationResponse] = field(default=None)
    
