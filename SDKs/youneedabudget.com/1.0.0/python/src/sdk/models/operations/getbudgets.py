from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetsQueryParams:
    include_accounts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_accounts', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBudgetsRequest:
    query_params: GetBudgetsQueryParams = field(default=None)
    

@dataclass
class GetBudgetsResponse:
    budget_summary_response: Optional[shared.BudgetSummaryResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
