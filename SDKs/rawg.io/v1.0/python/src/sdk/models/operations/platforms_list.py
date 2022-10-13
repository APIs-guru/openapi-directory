from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PlatformsListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class PlatformsListRequest:
    query_params: PlatformsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class PlatformsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Platform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class PlatformsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    platforms_list_200_application_json_object: Optional[PlatformsList200ApplicationJSON] = field(default=None)
    
