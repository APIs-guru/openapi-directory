from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChannelCategoriesPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelCategoriesRequest:
    path_params: GetChannelCategoriesPathParams = field()
    

@dataclass
class GetChannelCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    categories: Optional[List[shared.Category]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
