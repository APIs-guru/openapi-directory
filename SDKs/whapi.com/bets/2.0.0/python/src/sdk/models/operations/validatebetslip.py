from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateBetslipQueryParams:
    expanded: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expanded', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidateBetslipHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'apiKey' }})
    api_secret: str = field(default=None, metadata={'header': { 'field_name': 'apiSecret' }})
    

@dataclass
class ValidateBetslipRequest:
    query_params: ValidateBetslipQueryParams = field(default=None)
    headers: ValidateBetslipHeaders = field(default=None)
    request: shared.BetSlipRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidateBetslipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bet_slip_response: Optional[shared.BetSlipResponse] = field(default=None)
    
