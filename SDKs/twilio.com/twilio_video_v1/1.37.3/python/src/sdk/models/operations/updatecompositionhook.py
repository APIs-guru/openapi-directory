from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class UpdateCompositionHookPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateCompositionHookUpdateCompositionHookRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    audio_sources: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    format: Optional[shared.CompositionHookEnumFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclass
class UpdateCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCompositionHookRequest:
    path_params: UpdateCompositionHookPathParams = field()
    security: UpdateCompositionHookSecurity = field()
    request: Optional[UpdateCompositionHookUpdateCompositionHookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCompositionHookResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    
