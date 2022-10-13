from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTransactionsTransactionIDRelationshipsTagsPathParams:
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransactionsTransactionIDRelationshipsTagsRequest:
    path_params: DeleteTransactionsTransactionIDRelationshipsTagsPathParams = field(default=None)
    request: Optional[shared.UpdateTransactionTagsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteTransactionsTransactionIDRelationshipsTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
