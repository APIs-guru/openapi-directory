from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCommandsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCommandsIDRequest:
    path_params: PutCommandsIDPathParams = field()
    request: shared.Command = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCommandsIDResponse:
    content_type: str = field()
    status_code: int = field()
    command: Optional[shared.Command] = field(default=None)
    
