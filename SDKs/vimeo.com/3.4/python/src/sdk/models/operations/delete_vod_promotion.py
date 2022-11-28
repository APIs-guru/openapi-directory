from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVodPromotionPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    promotion_id: float = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVodPromotionSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVodPromotionRequest:
    path_params: DeleteVodPromotionPathParams = field()
    security: DeleteVodPromotionSecurity = field()
    

@dataclass
class DeleteVodPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
