from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAttachmentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttachmentsIDRequest:
    path_params: GetAttachmentsIDPathParams = field()
    

@dataclass
class GetAttachmentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    attachment: Optional[shared.Attachment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
