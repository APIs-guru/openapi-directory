from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCustomLogoAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomLogoAlt1Request:
    security: CreateCustomLogoAlt1Security = field()
    

@dataclass
class CreateCustomLogoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
