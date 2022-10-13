from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddChannelCategoriesPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddChannelCategoriesRequestBody:
    channels: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    

@dataclass
class AddChannelCategoriesRequest:
    path_params: AddChannelCategoriesPathParams = field(default=None)
    request: AddChannelCategoriesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddChannelCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
