from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDAlertSettingsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDAlertSettingsRequests:
    alert_settings: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    alert_settings1: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    alert_settings2: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    alert_settings3: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDAlertSettingsRequest:
    path_params: PostTeamsTeamIDAlertSettingsPathParams = field()
    request: Optional[PostTeamsTeamIDAlertSettingsRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDAlertSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    alert_settings: Optional[shared.AlertSettings] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
