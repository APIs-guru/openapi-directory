from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamEventsByYearKeysPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsByYearKeysRequest:
    path_params: GetTeamEventsByYearKeysPathParams = field(default=None)
    headers: GetTeamEventsByYearKeysHeaders = field(default=None)
    security: GetTeamEventsByYearKeysSecurity = field(default=None)
    

@dataclass
class GetTeamEventsByYearKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_team_events_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
