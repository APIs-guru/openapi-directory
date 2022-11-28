from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Aggregate2RequestBody:
    json: Optional[shared.SeldonMessageList] = field(default=None, metadata={'form': { 'field_name': 'json', 'json': True }})
    

@dataclass
class Aggregate2Request:
    request: Aggregate2RequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class Aggregate2Response:
    content_type: str = field()
    status_code: int = field()
    seldon_message: Optional[shared.SeldonMessage] = field(default=None)
    
