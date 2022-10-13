from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceRequestBodyUpdateServiceRequest:
    code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CodeLength' }})
    custom_code_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CustomCodeEnabled' }})
    default_template_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultTemplateSid' }})
    do_not_share_warning_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DoNotShareWarningEnabled' }})
    dtmf_input_required: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DtmfInputRequired' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LookupEnabled' }})
    psd2_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Psd2Enabled' }})
    push_apn_credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Push.ApnCredentialSid' }})
    push_fcm_credential_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Push.FcmCredentialSid' }})
    push_include_date: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Push.IncludeDate' }})
    skip_sms_to_landlines: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'SkipSmsToLandlines' }})
    totp_code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Totp.CodeLength' }})
    totp_issuer: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Totp.Issuer' }})
    totp_skew: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Totp.Skew' }})
    totp_time_step: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Totp.TimeStep' }})
    tts_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TtsName' }})
    

@dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServicePathParams = field(default=None)
    request: Optional[UpdateServiceRequestBodyUpdateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceSecurity = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service: Optional[shared.VerifyV2Service] = field(default=None)
    
