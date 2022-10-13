from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListSubscriptionEventsPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSubscriptionEventsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSubscriptionEventsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListSubscriptionEventsRequest:
    path_params: ListSubscriptionEventsPathParams = field(default=None)
    query_params: ListSubscriptionEventsQueryParams = field(default=None)
    security: ListSubscriptionEventsSecurity = field(default=None)
    

@dataclass
class ListSubscriptionEventsResponse:
    content_type: str = field(default=None)
    list_subscription_events_response: Optional[shared.ListSubscriptionEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
