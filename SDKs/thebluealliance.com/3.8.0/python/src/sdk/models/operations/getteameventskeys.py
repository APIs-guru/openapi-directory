from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsKeysPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsKeysRequest:
    headers: GetTeamEventsKeysHeaders = field()
    path_params: GetTeamEventsKeysPathParams = field()
    security: GetTeamEventsKeysSecurity = field()
    

@dataclass
class GetTeamEventsKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_team_events_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
