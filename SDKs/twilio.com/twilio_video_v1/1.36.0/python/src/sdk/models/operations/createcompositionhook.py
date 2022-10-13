from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared
CREATE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]

class CreateCompositionHookRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCompositionHookRequestBodyCreateCompositionHookRequest:
    audio_sources: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    format: Optional[shared.CompositionHookEnumFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'Format' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    resolution: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCompositionHookRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclass
class CreateCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionHookRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateCompositionHookRequestBodyCreateCompositionHookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCompositionHookSecurity = field(default=None)
    

@dataclass
class CreateCompositionHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    
