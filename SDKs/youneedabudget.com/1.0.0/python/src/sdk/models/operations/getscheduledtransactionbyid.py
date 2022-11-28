from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduledTransactionByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    scheduled_transaction_id: str = field(metadata={'path_param': { 'field_name': 'scheduled_transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduledTransactionByIDRequest:
    path_params: GetScheduledTransactionByIDPathParams = field()
    

@dataclass
class GetScheduledTransactionByIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    scheduled_transaction_response: Optional[shared.ScheduledTransactionResponse] = field(default=None)
    
