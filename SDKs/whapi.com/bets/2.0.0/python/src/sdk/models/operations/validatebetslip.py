from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateBetslipQueryParams:
    expanded: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expanded', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidateBetslipHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'apiKey', 'style': 'simple', 'explode': False }})
    api_secret: str = field(metadata={'header': { 'field_name': 'apiSecret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ValidateBetslipRequest:
    headers: ValidateBetslipHeaders = field()
    query_params: ValidateBetslipQueryParams = field()
    request: shared.BetSlipRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidateBetslipResponse:
    content_type: str = field()
    status_code: int = field()
    bet_slip_response: Optional[shared.BetSlipResponse] = field(default=None)
    
