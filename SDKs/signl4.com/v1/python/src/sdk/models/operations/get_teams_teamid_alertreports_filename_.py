from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDAlertReportsFileNamePathParams:
    file_name: str = field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDAlertReportsFileNameRequest:
    path_params: GetTeamsTeamIDAlertReportsFileNamePathParams = field()
    

@dataclass
class GetTeamsTeamIDAlertReportsFileNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_teams_team_id_alert_reports_file_name_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_teams_team_id_alert_reports_file_name_200_text_json_binary_string: Optional[bytes] = field(default=None)
    get_teams_team_id_alert_reports_file_name_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    
