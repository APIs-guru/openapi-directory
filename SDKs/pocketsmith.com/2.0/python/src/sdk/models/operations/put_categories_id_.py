from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutCategoriesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutCategoriesIDRequestBody:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PutCategoriesIDRequest:
    path_params: PutCategoriesIDPathParams = field(default=None)
    request: Optional[PutCategoriesIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCategoriesIDResponse:
    category: Optional[shared.Category] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
