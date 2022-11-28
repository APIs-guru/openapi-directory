from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodBackgroundPathParams:
    background_id: float = field(metadata={'path_param': { 'field_name': 'background_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodBackgroundRequest:
    path_params: GetVodBackgroundPathParams = field()
    

@dataclass
class GetVodBackgroundResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
