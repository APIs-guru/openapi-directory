from dataclasses import dataclass, field
from typing import Optional
DELETE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class DeleteTrustProductPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTrustProductRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteTrustProductPathParams = field(default=None)
    security: DeleteTrustProductSecurity = field(default=None)
    

@dataclass
class DeleteTrustProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
