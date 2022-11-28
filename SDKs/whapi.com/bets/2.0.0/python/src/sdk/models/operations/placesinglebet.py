from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlaceSingleBetQueryParams:
    exclude: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': False }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    include: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': False }})
    

@dataclass
class PlaceSingleBetHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclass
class PlaceSingleBetRequest:
    headers: PlaceSingleBetHeaders = field()
    query_params: PlaceSingleBetQueryParams = field()
    request: shared.SingleBetRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PlaceSingleBetResponse:
    content_type: str = field()
    status_code: int = field()
    bet_delayed_response: Optional[List[shared.BetDelayed]] = field(default=None)
    bet_placed_response: Optional[List[shared.BetPlaced]] = field(default=None)
    errors: Optional[shared.Errors] = field(default=None)
    
