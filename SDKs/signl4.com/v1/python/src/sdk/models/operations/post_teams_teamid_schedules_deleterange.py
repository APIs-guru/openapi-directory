from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDSchedulesDeleteRangePathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDSchedulesDeleteRangeRequests:
    delete_range_info: Optional[shared.DeleteRangeInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    delete_range_info1: Optional[shared.DeleteRangeInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    delete_range_info2: Optional[shared.DeleteRangeInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    delete_range_info3: Optional[shared.DeleteRangeInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDSchedulesDeleteRangeRequest:
    path_params: PostTeamsTeamIDSchedulesDeleteRangePathParams = field(default=None)
    request: Optional[PostTeamsTeamIDSchedulesDeleteRangeRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDSchedulesDeleteRangeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    schedule_infos: Optional[List[shared.ScheduleInfo]] = field(default=None)
    status_code: int = field(default=None)
    
