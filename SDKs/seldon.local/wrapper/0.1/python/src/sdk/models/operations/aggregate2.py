from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class Aggregate2RequestBody:
    json: Optional[shared.SeldonMessageList] = field(default=None, metadata={'form': { 'field_name': 'json', 'json': True }})
    

@dataclass
class Aggregate2Request:
    request: Aggregate2RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class Aggregate2Response:
    content_type: str = field(default=None)
    seldon_message: Optional[shared.SeldonMessage] = field(default=None)
    status_code: int = field(default=None)
    
