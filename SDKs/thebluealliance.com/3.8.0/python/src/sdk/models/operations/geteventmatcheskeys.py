from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventMatchesKeysPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventMatchesKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventMatchesKeysRequest:
    headers: GetEventMatchesKeysHeaders = field()
    path_params: GetEventMatchesKeysPathParams = field()
    security: GetEventMatchesKeysSecurity = field()
    

@dataclass
class GetEventMatchesKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_event_matches_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
