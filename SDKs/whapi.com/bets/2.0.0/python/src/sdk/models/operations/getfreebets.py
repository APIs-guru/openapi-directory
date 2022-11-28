from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFreeBetsQueryParams:
    exclude: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    

@dataclass
class GetFreeBetsHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFreeBetsRequest:
    headers: GetFreeBetsHeaders = field()
    query_params: GetFreeBetsQueryParams = field()
    

@dataclass
class GetFreeBetsResponse:
    content_type: str = field()
    status_code: int = field()
    free_bet: Optional[List[shared.FreeBetDetail]] = field(default=None)
    
