from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared
CREATE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]

class CreateCompositionRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCompositionRequestBodyCreateCompositionRequest:
    audio_sources: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    format: Optional[shared.CompositionEnumFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    room_sid: str = field(default=None, metadata={'form': { 'field_name': 'RoomSid' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCompositionRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclass
class CreateCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateCompositionRequestBodyCreateCompositionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCompositionSecurity = field(default=None)
    

@dataclass
class CreateCompositionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_composition: Optional[shared.VideoV1Composition] = field(default=None)
    
