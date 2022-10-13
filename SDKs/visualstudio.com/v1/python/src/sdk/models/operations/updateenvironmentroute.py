from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateEnvironmentRoutePathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentRouteRequests:
    environment_registration_callback_body: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    environment_registration_callback_body1: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    environment_registration_callback_body2: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    environment_registration_callback_body3: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateEnvironmentRouteRequest:
    path_params: UpdateEnvironmentRoutePathParams = field(default=None)
    request: Optional[UpdateEnvironmentRouteRequests] = field(default=None)
    

@dataclass
class UpdateEnvironmentRouteResponse:
    body: bytes = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
