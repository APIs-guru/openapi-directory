from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CashinPathParams:
    bet_id: str = field(metadata={'path_param': { 'field_name': 'betId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashinQueryParams:
    cash_in_value: float = field(metadata={'query_param': { 'field_name': 'cashInValue', 'style': 'form', 'explode': True }})
    cashin_bet_delay_id: str = field(metadata={'query_param': { 'field_name': 'cashinBetDelayId', 'style': 'form', 'explode': True }})
    

@dataclass
class CashinHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = field(metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashinRequest:
    headers: CashinHeaders = field()
    path_params: CashinPathParams = field()
    query_params: CashinQueryParams = field()
    

@dataclass
class CashinResponse:
    content_type: str = field()
    status_code: int = field()
    cash_in_response: Optional[shared.CashInResponse] = field(default=None)
    errors: Optional[shared.Errors] = field(default=None)
    
