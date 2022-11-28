from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVodPosterPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVodPosterSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVodPosterRequest:
    path_params: AddVodPosterPathParams = field()
    security: AddVodPosterSecurity = field()
    

@dataclass
class AddVodPosterResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
