from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoCategoriesPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoCategoriesRequest:
    path_params: GetVideoCategoriesPathParams = field()
    

@dataclass
class GetVideoCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    categories: Optional[List[shared.Category]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
