from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductCreateTrustProductRequest:
    email: str = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    policy_sid: str = field(default=None, metadata={'form': { 'field_name': 'PolicySid' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class CreateTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateTrustProductCreateTrustProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrustProductSecurity = field(default=None)
    

@dataclass
class CreateTrustProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    
