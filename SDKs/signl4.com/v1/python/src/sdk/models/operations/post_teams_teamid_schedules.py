from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDSchedulesPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDSchedulesRequests:
    schedule_info: Optional[shared.ScheduleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_info1: Optional[shared.ScheduleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_info2: Optional[shared.ScheduleInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_info3: Optional[shared.ScheduleInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDSchedulesRequest:
    path_params: PostTeamsTeamIDSchedulesPathParams = field(default=None)
    request: Optional[PostTeamsTeamIDSchedulesRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDSchedulesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    schedule_info: Optional[shared.ScheduleInfo] = field(default=None)
    status_code: int = field(default=None)
    
