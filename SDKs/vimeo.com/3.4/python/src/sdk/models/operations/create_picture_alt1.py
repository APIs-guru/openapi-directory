from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePictureAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePictureAlt1Request:
    security: CreatePictureAlt1Security = field()
    

@dataclass
class CreatePictureAlt1Response:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
