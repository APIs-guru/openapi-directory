from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetMonthCategoryByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    month: datetime = field(default=None, metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMonthCategoryByIDRequest:
    path_params: GetMonthCategoryByIDPathParams = field(default=None)
    

@dataclass
class GetMonthCategoryByIDResponse:
    category_response: Optional[shared.CategoryResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
