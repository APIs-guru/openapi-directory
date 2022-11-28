from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDPathParams:
    duty_id: str = field(metadata={'path_param': { 'field_name': 'dutyId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDRequest:
    path_params: DeleteTeamsTeamIDSchedulesDutyIDPathParams = field()
    

@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
