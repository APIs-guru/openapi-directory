from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    
class CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateSipDomainCreateSipDomainRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateSipDomainCreateSipDomainRequest:
    byoc_trunk_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ByocTrunkSid' }})
    domain_name: str = field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    emergency_caller_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EmergencyCallerSid' }})
    emergency_calling_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EmergencyCallingEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    sip_registration: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SipRegistration' }})
    voice_fallback_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_status_callback_method: Optional[CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackMethod' }})
    voice_status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceStatusCallbackUrl' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class CreateSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipDomainPathParams = field(default=None)
    request: Optional[CreateSipDomainCreateSipDomainRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipDomainSecurity = field(default=None)
    

@dataclass
class CreateSipDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain: Optional[shared.APIV2010AccountSipSipDomain] = field(default=None)
    
