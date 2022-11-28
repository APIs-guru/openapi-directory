from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDDutysummaryPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDDutysummaryQueryParams:
    last_two_duties: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'lastTwoDuties', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsTeamIDDutysummaryRequest:
    path_params: GetTeamsTeamIDDutysummaryPathParams = field()
    query_params: GetTeamsTeamIDDutysummaryQueryParams = field()
    

@dataclass
class GetTeamsTeamIDDutysummaryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    team_duty_summary_info: Optional[shared.TeamDutySummaryInfo] = field(default=None)
    
