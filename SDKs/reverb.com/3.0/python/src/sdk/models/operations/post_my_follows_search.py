from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class PostMyFollowsSearchRequestBodyCurrencyEnum(str, Enum):
    USD = "USD"
    CAD = "CAD"
    EUR = "EUR"
    GBP = "GBP"
    AUD = "AUD"
    JPY = "JPY"
    NZD = "NZD"
    MXN = "MXN"
    DKK = "DKK"
    SEK = "SEK"
    CHF = "CHF"
    ARS = "ARS"
    BRL = "BRL"
    HKD = "HKD"
    NOK = "NOK"
    PHP = "PHP"
    PLN = "PLN"
    RUB = "RUB"

class PostMyFollowsSearchRequestBodyListingTypeEnum(str, Enum):
    AUCTIONS = "auctions"
    OFFERS = "offers"


@dataclass_json
@dataclass
class PostMyFollowsSearchRequestBody:
    accepts_gift_cards: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepts_gift_cards') }})
    accepts_payment_plans: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepts_payment_plans') }})
    auction_price_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auction_price_max') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    currency: Optional[PostMyFollowsSearchRequestBodyCurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    decade: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decade') }})
    exclude_auctions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude_auctions') }})
    finish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finish') }})
    handmade: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handmade') }})
    item_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_city') }})
    item_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_country') }})
    item_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_region') }})
    item_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item_state') }})
    listing_type: Optional[PostMyFollowsSearchRequestBodyListingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listing_type') }})
    local_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_pickup') }})
    make: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    must_not: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('must_not') }})
    not_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not_ids') }})
    preferred_seller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred_seller') }})
    price_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_max') }})
    price_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_min') }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    ships_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ships_to') }})
    shop: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shop') }})
    shop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shop_id') }})
    watchers_count_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchers_count_min') }})
    year_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year_max') }})
    year_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year_min') }})
    

@dataclass
class PostMyFollowsSearchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsSearchRequest:
    security: PostMyFollowsSearchSecurity = field()
    request: Optional[PostMyFollowsSearchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyFollowsSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
