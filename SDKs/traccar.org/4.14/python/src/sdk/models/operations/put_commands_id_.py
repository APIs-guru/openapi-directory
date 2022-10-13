from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCommandsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCommandsIDRequest:
    path_params: PutCommandsIDPathParams = field(default=None)
    request: shared.Command = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCommandsIDResponse:
    command: Optional[shared.Command] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
