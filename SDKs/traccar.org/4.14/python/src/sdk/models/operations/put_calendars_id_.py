from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCalendarsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCalendarsIDRequest:
    path_params: PutCalendarsIDPathParams = field()
    request: shared.Calendar = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCalendarsIDResponse:
    content_type: str = field()
    status_code: int = field()
    calendar: Optional[shared.Calendar] = field(default=None)
    
