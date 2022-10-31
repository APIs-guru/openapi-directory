from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetEventMatchTimeseriesPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchTimeseriesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchTimeseriesRequest:
    path_params: GetEventMatchTimeseriesPathParams = field(default=None)
    headers: GetEventMatchTimeseriesHeaders = field(default=None)
    security: GetEventMatchTimeseriesSecurity = field(default=None)
    

@dataclass
class GetEventMatchTimeseriesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_event_match_timeseries_200_application_json_strings: Optional[List[str]] = field(default=None)
    
