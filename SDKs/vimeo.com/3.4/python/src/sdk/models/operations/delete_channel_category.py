from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteChannelCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteChannelCategoryRequest:
    path_params: DeleteChannelCategoryPathParams = field()
    security: DeleteChannelCategorySecurity = field()
    

@dataclass
class DeleteChannelCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
