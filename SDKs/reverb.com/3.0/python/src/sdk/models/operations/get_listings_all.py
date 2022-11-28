from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetListingsAllQueryParams:
    accepts_gift_cards: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'accepts_gift_cards', 'style': 'form', 'explode': True }})
    accepts_payment_plans: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'accepts_payment_plans', 'style': 'form', 'explode': True }})
    auction_price_max: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'auction_price_max', 'style': 'form', 'explode': True }})
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    conditions: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'conditions', 'style': 'form', 'explode': False }})
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    decade: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'decade', 'style': 'form', 'explode': True }})
    exclude_auctions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_auctions', 'style': 'form', 'explode': True }})
    finish: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'finish', 'style': 'form', 'explode': True }})
    handmade: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'handmade', 'style': 'form', 'explode': True }})
    item_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'item_city', 'style': 'form', 'explode': True }})
    item_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'item_country', 'style': 'form', 'explode': True }})
    item_region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'item_region', 'style': 'form', 'explode': True }})
    item_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'item_state', 'style': 'form', 'explode': True }})
    listing_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'listing_type', 'style': 'form', 'explode': True }})
    local_pickup: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'local_pickup', 'style': 'form', 'explode': True }})
    make: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': False }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    must_not: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'must_not', 'style': 'form', 'explode': True }})
    not_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'not_ids', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    preferred_seller: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preferred_seller', 'style': 'form', 'explode': True }})
    price_max: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'price_max', 'style': 'form', 'explode': True }})
    price_min: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'price_min', 'style': 'form', 'explode': True }})
    product_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'product_type', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    ships_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ships_to', 'style': 'form', 'explode': True }})
    shop: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shop', 'style': 'form', 'explode': True }})
    shop_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shop_id', 'style': 'form', 'explode': True }})
    watchers_count_min: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'watchers_count_min', 'style': 'form', 'explode': True }})
    year_max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year_max', 'style': 'form', 'explode': True }})
    year_min: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year_min', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingsAllRequest:
    query_params: GetListingsAllQueryParams = field()
    

@dataclass
class GetListingsAllResponse:
    content_type: str = field()
    status_code: int = field()
    
