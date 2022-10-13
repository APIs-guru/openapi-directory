from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUSTED_COMMS_CPS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchTrustedCommsCpsHeaders:
    x_xcnam_sensitive_phone_number: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Xcnam-Sensitive-Phone-Number' }})
    

@dataclass
class FetchTrustedCommsCpsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsCpsRequest:
    server_url: Optional[str] = field(default=None)
    headers: FetchTrustedCommsCpsHeaders = field(default=None)
    security: FetchTrustedCommsCpsSecurity = field(default=None)
    

@dataclass
class FetchTrustedCommsCpsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_trusted_comms_cps: Optional[shared.PreviewTrustedCommsCps] = field(default=None)
    
