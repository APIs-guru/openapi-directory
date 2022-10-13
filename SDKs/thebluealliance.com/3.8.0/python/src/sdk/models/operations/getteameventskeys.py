from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamEventsKeysPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsKeysRequest:
    path_params: GetTeamEventsKeysPathParams = field(default=None)
    headers: GetTeamEventsKeysHeaders = field(default=None)
    security: GetTeamEventsKeysSecurity = field(default=None)
    

@dataclass
class GetTeamEventsKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_team_events_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
