from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]

class CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateMediaProcessorCreateMediaProcessorRequest:
    extension: str = field(metadata={'form': { 'field_name': 'Extension' }})
    extension_context: str = field(metadata={'form': { 'field_name': 'ExtensionContext' }})
    extension_environment: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'ExtensionEnvironment' }})
    max_duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMediaProcessorRequest:
    security: CreateMediaProcessorSecurity = field()
    request: Optional[CreateMediaProcessorCreateMediaProcessorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMediaProcessorResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
