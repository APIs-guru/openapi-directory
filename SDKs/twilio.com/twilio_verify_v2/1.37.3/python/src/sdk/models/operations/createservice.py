from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


CREATE_SERVICE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CodeLength' }})
    custom_code_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CustomCodeEnabled' }})
    default_template_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultTemplateSid' }})
    do_not_share_warning_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DoNotShareWarningEnabled' }})
    dtmf_input_required: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'DtmfInputRequired' }})
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
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = field()
    request: Optional[CreateServiceCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service: Optional[shared.VerifyV2Service] = field(default=None)
    
