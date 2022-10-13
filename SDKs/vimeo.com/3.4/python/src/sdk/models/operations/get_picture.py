from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPicturePathParams:
    portraitset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPictureRequest:
    path_params: GetPicturePathParams = field(default=None)
    

@dataclass
class GetPictureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
