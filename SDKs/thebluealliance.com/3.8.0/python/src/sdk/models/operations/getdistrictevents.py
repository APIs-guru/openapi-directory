from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictEventsPathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetDistrictEventsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictEventsRequest:
    path_params: GetDistrictEventsPathParams = field(default=None)
    headers: GetDistrictEventsHeaders = field(default=None)
    security: GetDistrictEventsSecurity = field(default=None)
    

@dataclass
class GetDistrictEventsResponse:
    content_type: str = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
