from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPictureAlt1PathParams:
    portraitset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPictureAlt1Request:
    path_params: GetPictureAlt1PathParams = field(default=None)
    

@dataclass
class GetPictureAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
