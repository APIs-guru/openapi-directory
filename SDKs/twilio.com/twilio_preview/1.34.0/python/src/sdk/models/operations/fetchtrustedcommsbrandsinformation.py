from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUSTED_COMMS_BRANDS_INFORMATION_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchTrustedCommsBrandsInformationHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class FetchTrustedCommsBrandsInformationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsBrandsInformationRequest:
    server_url: Optional[str] = field(default=None)
    headers: FetchTrustedCommsBrandsInformationHeaders = field(default=None)
    security: FetchTrustedCommsBrandsInformationSecurity = field(default=None)
    

@dataclass
class FetchTrustedCommsBrandsInformationResponses:
    preview_trusted_comms_brands_information: Optional[shared.PreviewTrustedCommsBrandsInformation] = field(default=None)
    

@dataclass
class FetchTrustedCommsBrandsInformationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchTrustedCommsBrandsInformationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
