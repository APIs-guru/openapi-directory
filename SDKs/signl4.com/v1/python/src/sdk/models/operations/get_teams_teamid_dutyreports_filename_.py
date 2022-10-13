from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDDutyReportsFileNamePathParams:
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDDutyReportsFileNameRequest:
    path_params: GetTeamsTeamIDDutyReportsFileNamePathParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDDutyReportsFileNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_teams_team_id_duty_reports_file_name_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_teams_team_id_duty_reports_file_name_200_text_json_binary_string: Optional[bytes] = field(default=None)
    get_teams_team_id_duty_reports_file_name_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
