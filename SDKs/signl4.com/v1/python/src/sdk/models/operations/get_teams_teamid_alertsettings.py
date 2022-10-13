from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDAlertSettingsPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDAlertSettingsRequest:
    path_params: GetTeamsTeamIDAlertSettingsPathParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDAlertSettingsResponse:
    alert_settings: Optional[shared.AlertSettings] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
