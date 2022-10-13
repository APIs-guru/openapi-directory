from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamEventsStatusesByYearPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamEventsStatusesByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamEventsStatusesByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamEventsStatusesByYearRequest:
    path_params: GetTeamEventsStatusesByYearPathParams = field(default=None)
    headers: GetTeamEventsStatusesByYearHeaders = field(default=None)
    security: GetTeamEventsStatusesByYearSecurity = field(default=None)
    

@dataclass
class GetTeamEventsStatusesByYearResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_team_events_statuses_by_year_200_application_json_object: Optional[dict[str, shared.TeamEventStatus]] = field(default=None)
    
