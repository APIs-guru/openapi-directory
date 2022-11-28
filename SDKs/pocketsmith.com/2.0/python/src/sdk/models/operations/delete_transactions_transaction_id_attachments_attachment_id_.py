from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTransactionsTransactionIDAttachmentsAttachmentIDPathParams:
    attachment_id: int = field(metadata={'path_param': { 'field_name': 'attachment_id', 'style': 'simple', 'explode': False }})
    transaction_id: int = field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTransactionsTransactionIDAttachmentsAttachmentIDRequest:
    path_params: DeleteTransactionsTransactionIDAttachmentsAttachmentIDPathParams = field()
    

@dataclass
class DeleteTransactionsTransactionIDAttachmentsAttachmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
