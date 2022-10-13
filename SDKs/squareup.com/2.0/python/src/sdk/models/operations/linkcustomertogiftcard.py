from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LinkCustomerToGiftCardPathParams:
    gift_card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gift_card_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LinkCustomerToGiftCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LinkCustomerToGiftCardRequest:
    path_params: LinkCustomerToGiftCardPathParams = field(default=None)
    request: shared.LinkCustomerToGiftCardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: LinkCustomerToGiftCardSecurity = field(default=None)
    

@dataclass
class LinkCustomerToGiftCardResponse:
    content_type: str = field(default=None)
    link_customer_to_gift_card_response: Optional[shared.LinkCustomerToGiftCardResponse] = field(default=None)
    status_code: int = field(default=None)
    
