from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutAttachmentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutAttachmentsIDRequestBody:
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PutAttachmentsIDRequest:
    path_params: PutAttachmentsIDPathParams = field()
    request: Optional[PutAttachmentsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAttachmentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    attachment: Optional[shared.Attachment] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
