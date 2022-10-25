from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]

class CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateByocTrunkCreateByocTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    connection_policy_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConnectionPolicySid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    from_domain_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FromDomainSid' }})
    status_callback_method: Optional[CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    voice_fallback_method: Optional[CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class CreateByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateByocTrunkRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateByocTrunkCreateByocTrunkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateByocTrunkSecurity = field(default=None)
    

@dataclass
class CreateByocTrunkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    
