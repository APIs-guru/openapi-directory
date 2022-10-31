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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsCurrentCallRequest:
    server_url: Optional[str] = field(default=None)
    headers: FetchTrustedCommsCurrentCallHeaders = field(default=None)
    security: FetchTrustedCommsCurrentCallSecurity = field(default=None)
    

@dataclass
class FetchTrustedCommsCurrentCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_trusted_comms_current_call: Optional[shared.PreviewTrustedCommsCurrentCall] = field(default=None)
    
