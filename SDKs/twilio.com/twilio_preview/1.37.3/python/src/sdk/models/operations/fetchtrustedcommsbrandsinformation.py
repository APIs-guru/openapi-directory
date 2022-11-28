from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUSTED_COMMS_BRANDS_INFORMATION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchTrustedCommsBrandsInformationHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustedCommsBrandsInformationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsBrandsInformationRequest:
    headers: FetchTrustedCommsBrandsInformationHeaders = field()
    security: FetchTrustedCommsBrandsInformationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustedCommsBrandsInformationResponse:
    content_type: str = field()
    status_code: int = field()
    preview_trusted_comms_brands_information: Optional[shared.PreviewTrustedCommsBrandsInformation] = field(default=None)
    
