from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictEventsPathParams:
    district_key: str = field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictEventsRequest:
    headers: GetDistrictEventsHeaders = field()
    path_params: GetDistrictEventsPathParams = field()
    security: GetDistrictEventsSecurity = field()
    

@dataclass
class GetDistrictEventsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    
