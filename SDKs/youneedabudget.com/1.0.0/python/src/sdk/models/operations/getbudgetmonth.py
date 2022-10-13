from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetMonthPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    month: datetime = field(default=None, metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetMonthRequest:
    path_params: GetBudgetMonthPathParams = field(default=None)
    

@dataclass
class GetBudgetMonthResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    month_detail_response: Optional[shared.MonthDetailResponse] = field(default=None)
    status_code: int = field(default=None)
    
