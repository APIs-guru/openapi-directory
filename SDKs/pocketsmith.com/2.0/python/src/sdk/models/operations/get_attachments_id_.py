from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAttachmentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAttachmentsIDRequest:
    path_params: GetAttachmentsIDPathParams = field(default=None)
    

@dataclass
class GetAttachmentsIDResponse:
    attachment: Optional[shared.Attachment] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
