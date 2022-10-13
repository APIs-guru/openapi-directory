from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoCategoriesPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoCategoriesRequest:
    path_params: GetVideoCategoriesPathParams = field(default=None)
    

@dataclass
class GetVideoCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    categories: Optional[List[shared.Category]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
