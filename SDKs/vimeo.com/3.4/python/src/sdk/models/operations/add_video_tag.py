from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoTagPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoTagSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoTagRequest:
    path_params: AddVideoTagPathParams = field()
    security: AddVideoTagSecurity = field()
    

@dataclass
class AddVideoTagResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
