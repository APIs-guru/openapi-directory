from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
CREATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]

class CreateMediaProcessorRequestBodyStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateMediaProcessorRequestBodyCreateMediaProcessorRequest:
    extension: str = field(default=None, metadata={'form': { 'field_name': 'Extension' }})
    extension_context: str = field(default=None, metadata={'form': { 'field_name': 'ExtensionContext' }})
    extension_environment: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'ExtensionEnvironment' }})
    max_duration: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateMediaProcessorRequestBodyStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    

@dataclass
class CreateMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMediaProcessorRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateMediaProcessorRequestBodyCreateMediaProcessorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMediaProcessorSecurity = field(default=None)
    

@dataclass
class CreateMediaProcessorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
