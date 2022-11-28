from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetSettingsByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetSettingsByIDRequest:
    path_params: GetBudgetSettingsByIDPathParams = field()
    

@dataclass
class GetBudgetSettingsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    budget_settings_response: Optional[shared.BudgetSettingsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
