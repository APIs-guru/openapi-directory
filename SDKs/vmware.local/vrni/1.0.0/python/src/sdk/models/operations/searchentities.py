from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchEntitiesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchEntitiesRequest:
    security: SearchEntitiesSecurity = field()
    request: Optional[shared.SearchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    paged_list_response_with_time: Optional[shared.PagedListResponseWithTime] = field(default=None)
    
