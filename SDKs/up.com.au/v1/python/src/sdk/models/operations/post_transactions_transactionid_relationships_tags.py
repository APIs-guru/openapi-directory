from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostTransactionsTransactionIDRelationshipsTagsPathParams:
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTransactionsTransactionIDRelationshipsTagsRequest:
    path_params: PostTransactionsTransactionIDRelationshipsTagsPathParams = field()
    request: Optional[shared.UpdateTransactionTagsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransactionsTransactionIDRelationshipsTagsResponse:
    content_type: str = field()
    status_code: int = field()
    
