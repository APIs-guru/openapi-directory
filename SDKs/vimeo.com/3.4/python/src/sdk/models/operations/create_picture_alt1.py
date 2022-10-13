from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePictureAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePictureAlt1Request:
    security: CreatePictureAlt1Security = field(default=None)
    

@dataclass
class CreatePictureAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
