from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetSettingsByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetSettingsByIDRequest:
    path_params: GetBudgetSettingsByIDPathParams = field(default=None)
    

@dataclass
class GetBudgetSettingsByIDResponse:
    budget_settings_response: Optional[shared.BudgetSettingsResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
