from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDAttachmentsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDAttachmentsRequest:
    path_params: GetTransactionsIDAttachmentsPathParams = field()
    

@dataclass
class GetTransactionsIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
