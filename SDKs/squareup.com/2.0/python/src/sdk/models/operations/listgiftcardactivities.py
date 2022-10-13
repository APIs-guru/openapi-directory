from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListGiftCardActivitiesQueryParams:
    begin_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_time', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    gift_card_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'gift_card_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListGiftCardActivitiesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListGiftCardActivitiesRequest:
    query_params: ListGiftCardActivitiesQueryParams = field(default=None)
    security: ListGiftCardActivitiesSecurity = field(default=None)
    

@dataclass
class ListGiftCardActivitiesResponse:
    content_type: str = field(default=None)
    list_gift_card_activities_response: Optional[shared.ListGiftCardActivitiesResponse] = field(default=None)
    status_code: int = field(default=None)
    
