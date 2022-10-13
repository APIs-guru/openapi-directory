from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PublishersListQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class PublishersListRequest:
    query_params: PublishersListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class PublishersList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Publisher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class PublishersListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    publishers_list_200_application_json_object: Optional[PublishersList200ApplicationJSON] = field(default=None)
    
