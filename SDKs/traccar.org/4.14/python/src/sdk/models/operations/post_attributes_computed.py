from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAttributesComputedRequest:
    request: shared.Attribute = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAttributesComputedResponse:
    attribute: Optional[shared.Attribute] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
