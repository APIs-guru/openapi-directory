from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVodPromotionsPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class GetVodPromotionsFilterEnum(str, Enum):
    BATCH = "batch"
    DEFAULT = "default"
    SINGLE = "single"
    VIP = "vip"


@dataclass
class GetVodPromotionsQueryParams:
    filter: GetVodPromotionsFilterEnum = field(metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodPromotionsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVodPromotionsRequest:
    path_params: GetVodPromotionsPathParams = field()
    query_params: GetVodPromotionsQueryParams = field()
    security: GetVodPromotionsSecurity = field()
    

@dataclass
class GetVodPromotionsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_promotion: Optional[shared.OnDemandPromotion] = field(default=None)
    
