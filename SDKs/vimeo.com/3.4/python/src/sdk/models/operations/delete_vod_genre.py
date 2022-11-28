from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVodGenrePathParams:
    genre_id: str = field(metadata={'path_param': { 'field_name': 'genre_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVodGenreSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVodGenreRequest:
    path_params: DeleteVodGenrePathParams = field()
    security: DeleteVodGenreSecurity = field()
    

@dataclass
class DeleteVodGenreResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
