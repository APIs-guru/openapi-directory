from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventTeamsStatusesPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsStatusesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsStatusesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsStatusesRequest:
    path_params: GetEventTeamsStatusesPathParams = field(default=None)
    headers: GetEventTeamsStatusesHeaders = field(default=None)
    security: GetEventTeamsStatusesSecurity = field(default=None)
    

@dataclass
class GetEventTeamsStatusesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_event_teams_statuses_200_application_json_object: Optional[dict[str, shared.TeamEventStatus]] = field(default=None)
    
