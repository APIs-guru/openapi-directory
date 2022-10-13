from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoryPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryRequest:
    path_params: GetCategoryPathParams = field(default=None)
    

@dataclass
class GetCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    category: Optional[shared.Category] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
