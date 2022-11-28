from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_AUTH_TOKEN_PROMOTION_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class UpdateAuthTokenPromotionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAuthTokenPromotionRequest:
    security: UpdateAuthTokenPromotionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAuthTokenPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_v1_auth_token_promotion: Optional[shared.AccountsV1AuthTokenPromotion] = field(default=None)
    
