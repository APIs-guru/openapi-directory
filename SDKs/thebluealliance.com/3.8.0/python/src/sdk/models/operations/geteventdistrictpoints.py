from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventDistrictPointsPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventDistrictPointsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventDistrictPointsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventDistrictPointsRequest:
    headers: GetEventDistrictPointsHeaders = field()
    path_params: GetEventDistrictPointsPathParams = field()
    security: GetEventDistrictPointsSecurity = field()
    

@dataclass
class GetEventDistrictPointsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    event_district_points: Optional[shared.EventDistrictPoints] = field(default=None)
    
