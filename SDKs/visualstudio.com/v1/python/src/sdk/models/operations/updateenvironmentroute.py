from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateEnvironmentRoutePathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEnvironmentRouteRequests:
    environment_registration_callback_body: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    environment_registration_callback_body1: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    environment_registration_callback_body2: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    environment_registration_callback_body3: Optional[shared.EnvironmentRegistrationCallbackBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateEnvironmentRouteRequest:
    path_params: UpdateEnvironmentRoutePathParams = field()
    request: Optional[UpdateEnvironmentRouteRequests] = field(default=None)
    

@dataclass
class UpdateEnvironmentRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
