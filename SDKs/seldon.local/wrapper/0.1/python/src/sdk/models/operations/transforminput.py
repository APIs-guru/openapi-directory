from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TransformInputRequestBody:
    json: Optional[shared.SeldonMessage] = field(default=None, metadata={'form': { 'field_name': 'json', 'json': True }})
    

@dataclass
class TransformInputRequest:
    request: TransformInputRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class TransformInputResponse:
    content_type: str = field(default=None)
    seldon_message: Optional[shared.SeldonMessage] = field(default=None)
    status_code: int = field(default=None)
    
