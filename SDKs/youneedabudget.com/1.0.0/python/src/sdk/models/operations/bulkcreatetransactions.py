from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkCreateTransactionsPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BulkCreateTransactionsRequest:
    path_params: BulkCreateTransactionsPathParams = field(default=None)
    request: shared.BulkTransactions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BulkCreateTransactionsResponse:
    bulk_response: Optional[shared.BulkResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
