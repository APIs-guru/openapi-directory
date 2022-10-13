from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTeamsTeamIDAlertSettingsPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsTeamIDAlertSettingsRequests:
    alert_settings: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    alert_settings1: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    alert_settings2: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    alert_settings3: Optional[shared.AlertSettings] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostTeamsTeamIDAlertSettingsRequest:
    path_params: PostTeamsTeamIDAlertSettingsPathParams = field(default=None)
    request: Optional[PostTeamsTeamIDAlertSettingsRequests] = field(default=None)
    

@dataclass
class PostTeamsTeamIDAlertSettingsResponse:
    alert_settings: Optional[shared.AlertSettings] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
