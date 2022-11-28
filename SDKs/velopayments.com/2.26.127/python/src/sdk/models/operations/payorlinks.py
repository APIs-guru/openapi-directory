from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorLinksQueryParams:
    descendants_of_payor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'descendantsOfPayor', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    parent_of_payor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentOfPayor', 'style': 'form', 'explode': True }})
    

@dataclass
class PayorLinksRequest:
    query_params: PayorLinksQueryParams = field()
    

@dataclass
class PayorLinksResponse:
    content_type: str = field()
    status_code: int = field()
    payor_links_response: Optional[shared.PayorLinksResponse] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
