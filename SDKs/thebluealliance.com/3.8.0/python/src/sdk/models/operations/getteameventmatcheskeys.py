from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamEventMatchesKeysPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventMatchesKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventMatchesKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventMatchesKeysRequest:
    path_params: GetTeamEventMatchesKeysPathParams = field(default=None)
    headers: GetTeamEventMatchesKeysHeaders = field(default=None)
    security: GetTeamEventMatchesKeysSecurity = field(default=None)
    

@dataclass
class GetTeamEventMatchesKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_team_event_matches_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
