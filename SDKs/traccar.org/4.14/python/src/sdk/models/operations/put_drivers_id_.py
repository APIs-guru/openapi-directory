from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDriversIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDriversIDRequest:
    path_params: PutDriversIDPathParams = field(default=None)
    request: shared.Driver = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDriversIDResponse:
    content_type: str = field(default=None)
    driver: Optional[shared.Driver] = field(default=None)
    status_code: int = field(default=None)
    
