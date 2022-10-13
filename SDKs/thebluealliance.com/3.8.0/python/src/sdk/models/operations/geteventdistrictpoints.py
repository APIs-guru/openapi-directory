from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventDistrictPointsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventDistrictPointsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventDistrictPointsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventDistrictPointsRequest:
    path_params: GetEventDistrictPointsPathParams = field(default=None)
    headers: GetEventDistrictPointsHeaders = field(default=None)
    security: GetEventDistrictPointsSecurity = field(default=None)
    

@dataclass
class GetEventDistrictPointsResponse:
    content_type: str = field(default=None)
    event_district_points: Optional[shared.EventDistrictPoints] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
