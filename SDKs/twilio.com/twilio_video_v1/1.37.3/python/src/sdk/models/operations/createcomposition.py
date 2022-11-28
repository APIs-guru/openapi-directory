from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


CREATE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]

class CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateCompositionCreateCompositionRequest:
    room_sid: str = field(metadata={'form': { 'field_name': 'RoomSid' }})
    audio_sources: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AudioSourcesExcluded' }})
    format: Optional[shared.CompositionEnumFormatEnum] = field(default=None, metadata={'form': { 'field_name': 'Format' }})
    resolution: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Resolution' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    trim: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Trim' }})
    video_layout: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'VideoLayout' }})
    

@dataclass
class CreateCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionRequest:
    security: CreateCompositionSecurity = field()
    request: Optional[CreateCompositionCreateCompositionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCompositionResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition: Optional[shared.VideoV1Composition] = field(default=None)
    
