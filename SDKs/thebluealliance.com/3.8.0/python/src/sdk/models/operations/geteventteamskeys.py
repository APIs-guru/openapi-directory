from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetEventTeamsKeysPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventTeamsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsKeysRequest:
    path_params: GetEventTeamsKeysPathParams = field(default=None)
    headers: GetEventTeamsKeysHeaders = field(default=None)
    security: GetEventTeamsKeysSecurity = field(default=None)
    

@dataclass
class GetEventTeamsKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_event_teams_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
