from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCalendarsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCalendarsIDRequest:
    path_params: PutCalendarsIDPathParams = field(default=None)
    request: shared.Calendar = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCalendarsIDResponse:
    calendar: Optional[shared.Calendar] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
