from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetByIDPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetByIDQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBudgetByIDRequest:
    path_params: GetBudgetByIDPathParams = field(default=None)
    query_params: GetBudgetByIDQueryParams = field(default=None)
    

@dataclass
class GetBudgetByIDResponse:
    budget_detail_response: Optional[shared.BudgetDetailResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
