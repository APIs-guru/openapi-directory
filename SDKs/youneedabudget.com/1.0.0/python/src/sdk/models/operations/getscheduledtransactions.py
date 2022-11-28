from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduledTransactionsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduledTransactionsQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduledTransactionsRequest:
    path_params: GetScheduledTransactionsPathParams = field()
    query_params: GetScheduledTransactionsQueryParams = field()
    

@dataclass
class GetScheduledTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    scheduled_transactions_response: Optional[shared.ScheduledTransactionsResponse] = field(default=None)
    
