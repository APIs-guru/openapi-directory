from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventMatchTimeseriesPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchTimeseriesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchTimeseriesRequest:
    headers: GetEventMatchTimeseriesHeaders = field()
    path_params: GetEventMatchTimeseriesPathParams = field()
    security: GetEventMatchTimeseriesSecurity = field()
    

@dataclass
class GetEventMatchTimeseriesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_event_match_timeseries_200_application_json_strings: Optional[List[str]] = field(default=None)
    
