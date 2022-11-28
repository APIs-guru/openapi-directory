from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDAlertSettingsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDAlertSettingsRequest:
    path_params: GetTeamsTeamIDAlertSettingsPathParams = field()
    

@dataclass
class GetTeamsTeamIDAlertSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    alert_settings: Optional[shared.AlertSettings] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
