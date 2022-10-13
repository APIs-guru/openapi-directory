from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListGiftCardsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    customer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customer_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListGiftCardsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListGiftCardsRequest:
    query_params: ListGiftCardsQueryParams = field(default=None)
    security: ListGiftCardsSecurity = field(default=None)
    

@dataclass
class ListGiftCardsResponse:
    content_type: str = field(default=None)
    list_gift_cards_response: Optional[shared.ListGiftCardsResponse] = field(default=None)
    status_code: int = field(default=None)
    
