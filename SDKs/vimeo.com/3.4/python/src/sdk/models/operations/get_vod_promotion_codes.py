from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodPromotionCodesPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    promotion_id: float = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodPromotionCodesQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVodPromotionCodesSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVodPromotionCodesRequest:
    path_params: GetVodPromotionCodesPathParams = field()
    query_params: GetVodPromotionCodesQueryParams = field()
    security: GetVodPromotionCodesSecurity = field()
    

@dataclass
class GetVodPromotionCodesResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_promotion_code: Optional[shared.OnDemandPromotionCode] = field(default=None)
    
