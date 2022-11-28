from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodPromotionPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    promotion_id: float = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodPromotionSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVodPromotionRequest:
    path_params: GetVodPromotionPathParams = field()
    security: GetVodPromotionSecurity = field()
    

@dataclass
class GetVodPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_promotion: Optional[shared.OnDemandPromotion] = field(default=None)
    
