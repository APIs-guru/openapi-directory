from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetByIDQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBudgetByIDRequest:
    path_params: GetBudgetByIDPathParams = field()
    query_params: GetBudgetByIDQueryParams = field()
    

@dataclass
class GetBudgetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    budget_detail_response: Optional[shared.BudgetDetailResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
