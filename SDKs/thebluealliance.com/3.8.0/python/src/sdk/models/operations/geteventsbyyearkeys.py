from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventsByYearKeysPathParams:
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventsByYearKeysRequest:
    headers: GetEventsByYearKeysHeaders = field()
    path_params: GetEventsByYearKeysPathParams = field()
    security: GetEventsByYearKeysSecurity = field()
    

@dataclass
class GetEventsByYearKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_events_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
