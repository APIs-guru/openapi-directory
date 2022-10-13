from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostMyNegotiationsIDCounterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyNegotiationsIDCounterRequestBodyOfferItems:
    listing_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listing_id' }})
    price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shipping_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    
class PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum(str, Enum):
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
class PostMyNegotiationsIDCounterRequestBodyPrice:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: PostMyNegotiationsIDCounterRequestBodyPriceCurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    
class PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum(str, Enum):
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
class PostMyNegotiationsIDCounterRequestBodyShippingPrice:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: PostMyNegotiationsIDCounterRequestBodyShippingPriceCurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    

@dataclass_json
@dataclass
class PostMyNegotiationsIDCounterRequestBody:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    layaway_terms_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layaway_terms_slug' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    offer_items: Optional[List[PostMyNegotiationsIDCounterRequestBodyOfferItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer_items' }})
    price: Optional[PostMyNegotiationsIDCounterRequestBodyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    recipient_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_id' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region_code' }})
    shipping_price: Optional[PostMyNegotiationsIDCounterRequestBodyShippingPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    

@dataclass
class PostMyNegotiationsIDCounterSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyNegotiationsIDCounterRequest:
    path_params: PostMyNegotiationsIDCounterPathParams = field(default=None)
    request: Optional[PostMyNegotiationsIDCounterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyNegotiationsIDCounterSecurity = field(default=None)
    

@dataclass
class PostMyNegotiationsIDCounterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
