from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDAttachmentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDAttachmentsRequest:
    path_params: GetTransactionsIDAttachmentsPathParams = field(default=None)
    

@dataclass
class GetTransactionsIDAttachmentsResponse:
    attachments: Optional[List[shared.Attachment]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
