from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUSTED_COMMS_CURRENT_CALL_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchTrustedCommsCurrentCallHeaders:
    x_xcnam_sensitive_phone_number_from: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Xcnam-Sensitive-Phone-Number-From', 'style': 'simple', 'explode': False }})
    x_xcnam_sensitive_phone_number_to: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Xcnam-Sensitive-Phone-Number-To', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustedCommsCurrentCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsCurrentCallRequest:
    headers: FetchTrustedCommsCurrentCallHeaders = field()
    security: FetchTrustedCommsCurrentCallSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustedCommsCurrentCallResponse:
    content_type: str = field()
    status_code: int = field()
    preview_trusted_comms_current_call: Optional[shared.PreviewTrustedCommsCurrentCall] = field(default=None)
    
