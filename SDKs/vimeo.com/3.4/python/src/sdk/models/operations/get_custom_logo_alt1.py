from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomLogoAlt1PathParams:
    logo_id: float = field(metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomLogoAlt1Request:
    path_params: GetCustomLogoAlt1PathParams = field()
    

@dataclass
class GetCustomLogoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
