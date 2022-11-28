from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAttachmentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAttachmentsIDRequest:
    path_params: DeleteAttachmentsIDPathParams = field()
    

@dataclass
class DeleteAttachmentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
