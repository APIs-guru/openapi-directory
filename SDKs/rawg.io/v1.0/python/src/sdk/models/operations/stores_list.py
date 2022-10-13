from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StoresListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class StoresListRequest:
    query_params: StoresListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class StoresList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Store] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class StoresListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stores_list_200_application_json_object: Optional[StoresList200ApplicationJSON] = field(default=None)
    
