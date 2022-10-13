from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVodPosterPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    poster_id: float = field(default=None, metadata={'path_param': { 'field_name': 'poster_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVodPosterRequest:
    path_params: GetVodPosterPathParams = field(default=None)
    

@dataclass
class GetVodPosterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
