from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetMatchTimeseriesPathParams:
    match_key: str = field(default=None, metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchTimeseriesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchTimeseriesRequest:
    path_params: GetMatchTimeseriesPathParams = field(default=None)
    headers: GetMatchTimeseriesHeaders = field(default=None)
    security: GetMatchTimeseriesSecurity = field(default=None)
    

@dataclass
class GetMatchTimeseriesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_match_timeseries_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
