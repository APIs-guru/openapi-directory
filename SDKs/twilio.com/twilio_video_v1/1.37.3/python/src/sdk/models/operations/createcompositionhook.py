from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


CREATE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]

class CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCompositionHookCreateCompositionHookRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    audio_sources: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    format: Optional[shared.CompositionHookEnumFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclass
class CreateCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionHookRequest:
    security: CreateCompositionHookSecurity = field()
    request: Optional[CreateCompositionHookCreateCompositionHookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCompositionHookResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    
