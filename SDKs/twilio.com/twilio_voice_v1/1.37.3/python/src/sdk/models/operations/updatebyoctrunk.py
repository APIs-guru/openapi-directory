from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateByocTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateByocTrunkUpdateByocTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    connection_policy_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ConnectionPolicySid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    from_domain_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FromDomainSid' }})
    status_callback_method: Optional[UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    status_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallbackUrl' }})
    voice_fallback_method: Optional[UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackMethod' }})
    voice_fallback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceFallbackUrl' }})
    voice_method: Optional[UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'VoiceMethod' }})
    voice_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceUrl' }})
    

@dataclass
class UpdateByocTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateByocTrunkRequest:
    path_params: UpdateByocTrunkPathParams = field()
    security: UpdateByocTrunkSecurity = field()
    request: Optional[UpdateByocTrunkUpdateByocTrunkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateByocTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_byoc_trunk: Optional[shared.VoiceV1ByocTrunk] = field(default=None)
    
