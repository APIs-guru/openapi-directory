from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateTrustProductPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrustProductRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTrustProductPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTrustProductSecurity = field(default=None)
    

@dataclass
class UpdateTrustProductResponses:
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    

@dataclass
class UpdateTrustProductResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateTrustProductResponses]] = field(default=None)
    status_code: int = field(default=None)
    
