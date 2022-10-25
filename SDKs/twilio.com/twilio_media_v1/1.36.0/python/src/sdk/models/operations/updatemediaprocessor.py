from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class UpdateMediaProcessorPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMediaProcessorUpdateMediaProcessorRequest:
    status: shared.MediaProcessorEnumUpdateStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMediaProcessorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMediaProcessorPathParams = field(default=None)
    request: Optional[UpdateMediaProcessorUpdateMediaProcessorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMediaProcessorSecurity = field(default=None)
    

@dataclass
class UpdateMediaProcessorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
