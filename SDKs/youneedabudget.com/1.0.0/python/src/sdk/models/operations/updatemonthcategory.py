from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateMonthCategoryPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    month: date = field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMonthCategoryRequest:
    path_params: UpdateMonthCategoryPathParams = field()
    request: shared.SaveMonthCategoryWrapper = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMonthCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    save_category_response: Optional[shared.SaveCategoryResponse] = field(default=None)
    
