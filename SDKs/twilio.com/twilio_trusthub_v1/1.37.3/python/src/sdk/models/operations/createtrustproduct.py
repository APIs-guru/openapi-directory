from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class CreateTrustProductCreateTrustProductRequest:
    email: str = field(metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    policy_sid: str = field(metadata={'form': { 'field_name': 'PolicySid' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class CreateTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustProductRequest:
    security: CreateTrustProductSecurity = field()
    request: Optional[CreateTrustProductCreateTrustProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTrustProductResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    
