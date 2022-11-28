from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBudgetMonthsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBudgetMonthsQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBudgetMonthsRequest:
    path_params: GetBudgetMonthsPathParams = field()
    query_params: GetBudgetMonthsQueryParams = field()
    

@dataclass
class GetBudgetMonthsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    month_summaries_response: Optional[shared.MonthSummariesResponse] = field(default=None)
    
