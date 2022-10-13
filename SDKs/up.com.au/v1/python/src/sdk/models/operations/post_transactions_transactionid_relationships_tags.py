from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostTransactionsTransactionIDRelationshipsTagsPathParams:
    transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTransactionsTransactionIDRelationshipsTagsRequest:
    path_params: PostTransactionsTransactionIDRelationshipsTagsPathParams = field(default=None)
    request: Optional[shared.UpdateTransactionTagsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransactionsTransactionIDRelationshipsTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
