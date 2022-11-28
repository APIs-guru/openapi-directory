from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkCreateTransactionsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateTransactionsRequest:
    path_params: BulkCreateTransactionsPathParams = field()
    request: shared.BulkTransactions = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BulkCreateTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_response: Optional[shared.BulkResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
