from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictEventsSimplePathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictEventsSimpleRequest:
    path_params: GetDistrictEventsSimplePathParams = field(default=None)
    headers: GetDistrictEventsSimpleHeaders = field(default=None)
    security: GetDistrictEventsSimpleSecurity = field(default=None)
    

@dataclass
class GetDistrictEventsSimpleResponse:
    content_type: str = field(default=None)
    event_simples: Optional[List[shared.EventSimple]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
