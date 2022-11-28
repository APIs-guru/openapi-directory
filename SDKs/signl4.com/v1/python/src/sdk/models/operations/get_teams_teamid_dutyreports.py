from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDDutyReportsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDDutyReportsRequest:
    path_params: GetTeamsTeamIDDutyReportsPathParams = field()
    

@dataclass
class GetTeamsTeamIDDutyReportsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    duty_audit_report_file_infos: Optional[List[dict[str, Any]]] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
