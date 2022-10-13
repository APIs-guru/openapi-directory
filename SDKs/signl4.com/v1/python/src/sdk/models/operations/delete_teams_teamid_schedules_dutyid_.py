from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDPathParams:
    duty_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dutyId', 'style': 'simple', 'explode': False }})
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDRequest:
    path_params: DeleteTeamsTeamIDSchedulesDutyIDPathParams = field(default=None)
    

@dataclass
class DeleteTeamsTeamIDSchedulesDutyIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
