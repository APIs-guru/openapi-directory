from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddChannelCategoriesPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddChannelCategoriesRequestBody:
    channels: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    

@dataclass
class AddChannelCategoriesRequest:
    path_params: AddChannelCategoriesPathParams = field()
    request: AddChannelCategoriesRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddChannelCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
