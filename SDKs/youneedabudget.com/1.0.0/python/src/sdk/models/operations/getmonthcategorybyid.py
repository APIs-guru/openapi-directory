from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetMonthCategoryByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    month: date = field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMonthCategoryByIDRequest:
    path_params: GetMonthCategoryByIDPathParams = field()
    

@dataclass
class GetMonthCategoryByIDResponse:
    content_type: str = field()
    status_code: int = field()
    category_response: Optional[shared.CategoryResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
