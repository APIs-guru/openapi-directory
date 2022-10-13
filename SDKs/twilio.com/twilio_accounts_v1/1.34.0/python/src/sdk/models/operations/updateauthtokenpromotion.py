from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_AUTH_TOKEN_PROMOTION_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class UpdateAuthTokenPromotionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAuthTokenPromotionRequest:
    server_url: Optional[str] = field(default=None)
    security: UpdateAuthTokenPromotionSecurity = field(default=None)
    

@dataclass
class UpdateAuthTokenPromotionResponses:
    accounts_v1_auth_token_promotion: Optional[shared.AccountsV1AuthTokenPromotion] = field(default=None)
    

@dataclass
class UpdateAuthTokenPromotionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAuthTokenPromotionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
