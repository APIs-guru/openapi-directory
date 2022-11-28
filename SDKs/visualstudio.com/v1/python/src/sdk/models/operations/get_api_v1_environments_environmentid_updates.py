from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1EnvironmentsEnvironmentIDUpdatesPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDUpdatesRequest:
    path_params: GetAPIV1EnvironmentsEnvironmentIDUpdatesPathParams = field()
    

@dataclass
class GetAPIV1EnvironmentsEnvironmentIDUpdatesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    cloud_environment_result: Optional[shared.CloudEnvironmentResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
