from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPicturePathParams:
    portraitset_id: float = field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPictureRequest:
    path_params: GetPicturePathParams = field()
    

@dataclass
class GetPictureResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
