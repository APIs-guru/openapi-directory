from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCustomLogoAlt1PathParams:
    logo_id: float = field(default=None, metadata={'path_param': { 'field_name': 'logo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomLogoAlt1Request:
    path_params: GetCustomLogoAlt1PathParams = field(default=None)
    

@dataclass
class GetCustomLogoAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
