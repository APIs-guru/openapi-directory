from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnlinkCustomerFromGiftCardPathParams:
    gift_card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gift_card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlinkCustomerFromGiftCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlinkCustomerFromGiftCardRequest:
    path_params: UnlinkCustomerFromGiftCardPathParams = field(default=None)
    request: shared.UnlinkCustomerFromGiftCardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UnlinkCustomerFromGiftCardSecurity = field(default=None)
    

@dataclass
class UnlinkCustomerFromGiftCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unlink_customer_from_gift_card_response: Optional[shared.UnlinkCustomerFromGiftCardResponse] = field(default=None)
    
