from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAttributesComputedIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributesComputedIDRequest:
    path_params: PutAttributesComputedIDPathParams = field(default=None)
    request: shared.Attribute = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAttributesComputedIDResponse:
    attribute: Optional[shared.Attribute] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
