from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetEventMatchesKeysPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchesKeysRequest:
    path_params: GetEventMatchesKeysPathParams = field(default=None)
    headers: GetEventMatchesKeysHeaders = field(default=None)
    security: GetEventMatchesKeysSecurity = field(default=None)
    

@dataclass
class GetEventMatchesKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_event_matches_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
