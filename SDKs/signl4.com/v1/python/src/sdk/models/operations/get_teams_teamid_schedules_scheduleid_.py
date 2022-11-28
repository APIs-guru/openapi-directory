from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDSchedulesScheduleIDPathParams:
    schedule_id: str = field(metadata={'path_param': { 'field_name': 'scheduleId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDSchedulesScheduleIDRequest:
    path_params: GetTeamsTeamIDSchedulesScheduleIDPathParams = field()
    

@dataclass
class GetTeamsTeamIDSchedulesScheduleIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    schedule_info: Optional[shared.ScheduleInfo] = field(default=None)
    
