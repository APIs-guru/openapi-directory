from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodPosterPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    poster_id: float = field(metadata={'path_param': { 'field_name': 'poster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodPosterRequest:
    path_params: GetVodPosterPathParams = field()
    

@dataclass
class GetVodPosterResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
