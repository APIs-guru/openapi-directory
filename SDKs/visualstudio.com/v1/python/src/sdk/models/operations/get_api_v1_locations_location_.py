from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1LocationsLocationPathParams:
    location: str = field(metadata={'path_param': { 'field_name': 'location', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1LocationsLocationQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1LocationsLocationRequest:
    path_params: GetAPIV1LocationsLocationPathParams = field()
    query_params: GetAPIV1LocationsLocationQueryParams = field()
    

@dataclass
class GetAPIV1LocationsLocationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    location_info_result: Optional[shared.LocationInfoResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
