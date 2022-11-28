from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDriversIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDriversIDRequest:
    path_params: PutDriversIDPathParams = field()
    request: shared.Driver = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDriversIDResponse:
    content_type: str = field()
    status_code: int = field()
    driver: Optional[shared.Driver] = field(default=None)
    
