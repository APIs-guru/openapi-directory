from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchTrustProductPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustProductRequest:
    path_params: FetchTrustProductPathParams = field()
    security: FetchTrustProductSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustProductResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    
