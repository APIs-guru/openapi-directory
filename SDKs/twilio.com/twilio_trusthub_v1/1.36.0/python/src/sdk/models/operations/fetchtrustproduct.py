from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchTrustProductPathParams = field(default=None)
    security: FetchTrustProductSecurity = field(default=None)
    

@dataclass
class FetchTrustProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    
