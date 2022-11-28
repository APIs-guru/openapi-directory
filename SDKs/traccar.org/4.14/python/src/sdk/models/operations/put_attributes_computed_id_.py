from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAttributesComputedIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAttributesComputedIDRequest:
    path_params: PutAttributesComputedIDPathParams = field()
    request: shared.Attribute = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAttributesComputedIDResponse:
    content_type: str = field()
    status_code: int = field()
    attribute: Optional[shared.Attribute] = field(default=None)
    
