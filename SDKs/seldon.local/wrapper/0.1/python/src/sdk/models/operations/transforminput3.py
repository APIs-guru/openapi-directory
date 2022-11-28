from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TransformInput3RequestBody:
    json: Optional[shared.SeldonMessage] = field(default=None, metadata={'form': { 'field_name': 'json', 'json': True }})
    

@dataclass
class TransformInput3Request:
    request: TransformInput3RequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class TransformInput3Response:
    content_type: str = field()
    status_code: int = field()
    seldon_message: Optional[shared.SeldonMessage] = field(default=None)
    
