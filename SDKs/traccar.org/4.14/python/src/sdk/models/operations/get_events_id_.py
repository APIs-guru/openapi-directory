from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsIDRequest:
    path_params: GetEventsIDPathParams = field()
    

@dataclass
class GetEventsIDResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
