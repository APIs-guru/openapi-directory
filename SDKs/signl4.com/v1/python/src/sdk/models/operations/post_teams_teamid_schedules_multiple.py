from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDSchedulesMultiplePathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDSchedulesMultipleQueryParams:
    override_existing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'overrideExisting', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTeamsTeamIDSchedulesMultipleRequests:
    schedule_infos: Optional[List[shared.ScheduleInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_infos1: Optional[List[shared.ScheduleInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_infos2: Optional[List[shared.ScheduleInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_infos3: Optional[List[shared.ScheduleInfo]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDSchedulesMultipleRequest:
    path_params: PostTeamsTeamIDSchedulesMultiplePathParams = field()
    query_params: PostTeamsTeamIDSchedulesMultipleQueryParams = field()
    request: Optional[PostTeamsTeamIDSchedulesMultipleRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDSchedulesMultipleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    schedule_infos: Optional[List[shared.ScheduleInfo]] = field(default=None)
    
