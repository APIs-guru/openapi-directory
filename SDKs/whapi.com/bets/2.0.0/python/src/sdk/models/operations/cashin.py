from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CashinPathParams:
    bet_id: str = field(default=None, metadata={'path_param': { 'field_name': 'betId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashinQueryParams:
    cash_in_value: float = field(default=None, metadata={'query_param': { 'field_name': 'cashInValue', 'style': 'form', 'explode': True }})
    cashin_bet_delay_id: str = field(default=None, metadata={'query_param': { 'field_name': 'cashinBetDelayId', 'style': 'form', 'explode': True }})
    

@dataclass
class CashinHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(default=None, metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    api_ticket: str = field(default=None, metadata={'header': { 'field_name': 'apiTicket', 'style': 'simple', 'explode': False }})
    

@dataclass
class CashinRequest:
    path_params: CashinPathParams = field(default=None)
    query_params: CashinQueryParams = field(default=None)
    headers: CashinHeaders = field(default=None)
    

@dataclass
class CashinResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cash_in_response: Optional[shared.CashInResponse] = field(default=None)
    errors: Optional[shared.Errors] = field(default=None)
    
