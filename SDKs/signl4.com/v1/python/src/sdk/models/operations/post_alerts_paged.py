from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAlertsPagedQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAlertsPagedRequests:
    alert_filter_public: Optional[shared.AlertFilterPublic] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    alert_filter_public1: Optional[shared.AlertFilterPublic] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    alert_filter_public2: Optional[shared.AlertFilterPublic] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    alert_filter_public3: Optional[shared.AlertFilterPublic] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAlertsPagedRequest:
    query_params: PostAlertsPagedQueryParams = field(default=None)
    request: Optional[PostAlertsPagedRequests] = field(default=None)
    

@dataclass
class PostAlertsPagedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_alert_paged_results_public: Optional[shared.OverviewAlertPagedResultsPublic] = field(default=None)
    status_code: int = field(default=None)
    
