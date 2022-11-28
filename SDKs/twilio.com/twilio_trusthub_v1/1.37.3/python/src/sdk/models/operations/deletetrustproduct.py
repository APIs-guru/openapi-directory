from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteTrustProductPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrustProductRequest:
    path_params: DeleteTrustProductPathParams = field()
    security: DeleteTrustProductSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTrustProductResponse:
    content_type: str = field()
    status_code: int = field()
    
