from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDAlertReportsPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDAlertReportsRequest:
    path_params: GetTeamsTeamIDAlertReportsPathParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDAlertReportsResponse:
    alert_audit_report_file_infos: Optional[List[dict[str, Any]]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
