from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostConversationsConversationIDOfferPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBodyOfferItems:
    listing_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_id' }})
    price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shipping_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    
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
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: PostConversationsConversationIDOfferRequestBodyPriceCurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    
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
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: PostConversationsConversationIDOfferRequestBodyShippingPriceCurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    

@dataclass_json
@dataclass
class PostConversationsConversationIDOfferRequestBody:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    layaway_terms_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layaway_terms_slug' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    offer_items: Optional[List[PostConversationsConversationIDOfferRequestBodyOfferItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer_items' }})
    price: Optional[PostConversationsConversationIDOfferRequestBodyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    recipient_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_id' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region_code' }})
    shipping_price: Optional[PostConversationsConversationIDOfferRequestBodyShippingPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    

@dataclass
class PostConversationsConversationIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostConversationsConversationIDOfferRequest:
    path_params: PostConversationsConversationIDOfferPathParams = field(default=None)
    request: Optional[PostConversationsConversationIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostConversationsConversationIDOfferSecurity = field(default=None)
    

@dataclass
class PostConversationsConversationIDOfferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
