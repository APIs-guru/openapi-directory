from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCardsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    customer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customer_id', 'style': 'form', 'explode': True }})
    include_disabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_disabled', 'style': 'form', 'explode': True }})
    reference_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reference_id', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCardsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCardsRequest:
    query_params: ListCardsQueryParams = field(default=None)
    security: ListCardsSecurity = field(default=None)
    

@dataclass
class ListCardsResponse:
    content_type: str = field(default=None)
    list_cards_response: Optional[shared.ListCardsResponse] = field(default=None)
    status_code: int = field(default=None)
    
