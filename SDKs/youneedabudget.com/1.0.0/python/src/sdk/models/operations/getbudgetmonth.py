from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetMonthPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    month: date = field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetMonthRequest:
    path_params: GetBudgetMonthPathParams = field()
    

@dataclass
class GetBudgetMonthResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    month_detail_response: Optional[shared.MonthDetailResponse] = field(default=None)
    
