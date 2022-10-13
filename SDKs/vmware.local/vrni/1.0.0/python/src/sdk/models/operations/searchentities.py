from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SearchEntitiesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SearchEntitiesRequest:
    request: Optional[shared.SearchRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchEntitiesSecurity = field(default=None)
    

@dataclass
class SearchEntitiesResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    paged_list_response_with_time: Optional[shared.PagedListResponseWithTime] = field(default=None)
    status_code: int = field(default=None)
    
