from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetMatchTimeseriesPathParams:
    match_key: str = field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMatchTimeseriesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMatchTimeseriesRequest:
    headers: GetMatchTimeseriesHeaders = field()
    path_params: GetMatchTimeseriesPathParams = field()
    security: GetMatchTimeseriesSecurity = field()
    

@dataclass
class GetMatchTimeseriesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_match_timeseries_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
