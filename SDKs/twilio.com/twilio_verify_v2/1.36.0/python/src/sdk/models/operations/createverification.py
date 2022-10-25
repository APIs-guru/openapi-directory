from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
CREATE_VERIFICATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateVerificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVerificationCreateVerificationRequest:
    amount: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Amount' }})
    app_hash: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AppHash' }})
    channel: str = field(default=None, metadata={'form': { 'field_name': 'Channel' }})
    channel_configuration: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'ChannelConfiguration' }})
    custom_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomCode' }})
    custom_friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomFriendlyName' }})
    custom_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomMessage' }})
    locale: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Locale' }})
    payee: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Payee' }})
    rate_limits: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'RateLimits' }})
    send_digits: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SendDigits' }})
    template_custom_substitutions: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TemplateCustomSubstitutions' }})
    template_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TemplateSid' }})
    to: str = field(default=None, metadata={'form': { 'field_name': 'To' }})
    

@dataclass
class CreateVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateVerificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateVerificationPathParams = field(default=None)
    request: Optional[CreateVerificationCreateVerificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateVerificationSecurity = field(default=None)
    

@dataclass
class CreateVerificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_verification: Optional[shared.VerifyV2ServiceVerification] = field(default=None)
    
