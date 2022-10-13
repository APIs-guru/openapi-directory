from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostEventsPagedQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    

@dataclass
class PostEventsPagedRequests:
    event_filter: Optional[shared.EventFilter] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    event_filter1: Optional[shared.EventFilter] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    event_filter2: Optional[shared.EventFilter] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    event_filter3: Optional[shared.EventFilter] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostEventsPagedRequest:
    query_params: PostEventsPagedQueryParams = field(default=None)
    request: Optional[PostEventsPagedRequests] = field(default=None)
    

@dataclass
class PostEventsPagedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_event_paged_results_public: Optional[shared.OverviewEventPagedResultsPublic] = field(default=None)
    status_code: int = field(default=None)
    
