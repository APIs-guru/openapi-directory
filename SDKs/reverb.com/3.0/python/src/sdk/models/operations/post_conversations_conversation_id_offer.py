from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostConversationsConversationIDOfferPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBodyOfferItems:
    listing_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_id') }})
    price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    shipping_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_price') }})
    
class PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    AUD = "AUD"
    JPY = "JPY"
    NZD = "NZD"
    MXN = "MXN"


@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBodyPrice:
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    
class PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    AUD = "AUD"
    JPY = "JPY"
    NZD = "NZD"
    MXN = "MXN"


@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBodyShippingPrice:
    r"""PostConversationsConversationIDOfferRequestBodyShippingPrice
    Shipping price (sellers only)
    """
    
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBody:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    layaway_terms_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layaway_terms_slug') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    offer_items: Optional[List[PostConversationsConversationIDOfferRequestBodyOfferItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer_items') }})
    price: Optional[PostConversationsConversationIDOfferRequestBodyPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    recipient_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region_code') }})
    shipping_price: Optional[PostConversationsConversationIDOfferRequestBodyShippingPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_price') }})
    

@dataclass
class PostConversationsConversationIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostConversationsConversationIDOfferRequest:
    path_params: PostConversationsConversationIDOfferPathParams = field()
    security: PostConversationsConversationIDOfferSecurity = field()
    request: Optional[PostConversationsConversationIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostConversationsConversationIDOfferResponse:
    content_type: str = field()
    status_code: int = field()
    
