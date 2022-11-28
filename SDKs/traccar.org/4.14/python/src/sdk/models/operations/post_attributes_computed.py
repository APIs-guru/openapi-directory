from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAttributesComputedRequest:
    request: shared.Attribute = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAttributesComputedResponse:
    content_type: str = field()
    status_code: int = field()
    attribute: Optional[shared.Attribute] = field(default=None)
    
