from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoryPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryRequest:
    path_params: GetCategoryPathParams = field()
    

@dataclass
class GetCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    category: Optional[shared.Category] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
