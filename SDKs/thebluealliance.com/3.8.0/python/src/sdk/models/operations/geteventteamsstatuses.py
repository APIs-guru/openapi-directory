from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventTeamsStatusesPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsStatusesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventTeamsStatusesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventTeamsStatusesRequest:
    headers: GetEventTeamsStatusesHeaders = field()
    path_params: GetEventTeamsStatusesPathParams = field()
    security: GetEventTeamsStatusesSecurity = field()
    

@dataclass
class GetEventTeamsStatusesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_event_teams_statuses_200_application_json_object: Optional[dict[str, shared.TeamEventStatus]] = field(default=None)
    
