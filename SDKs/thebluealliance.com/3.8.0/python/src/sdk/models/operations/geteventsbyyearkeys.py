from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetEventsByYearKeysPathParams:
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventsByYearKeysRequest:
    path_params: GetEventsByYearKeysPathParams = field(default=None)
    headers: GetEventsByYearKeysHeaders = field(default=None)
    security: GetEventsByYearKeysSecurity = field(default=None)
    

@dataclass
class GetEventsByYearKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_events_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
