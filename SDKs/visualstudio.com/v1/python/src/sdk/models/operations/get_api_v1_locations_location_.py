from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1LocationsLocationPathParams:
    location: str = field(default=None, metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1LocationsLocationQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1LocationsLocationRequest:
    path_params: GetAPIV1LocationsLocationPathParams = field(default=None)
    query_params: GetAPIV1LocationsLocationQueryParams = field(default=None)
    

@dataclass
class GetAPIV1LocationsLocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    location_info_result: Optional[shared.LocationInfoResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
