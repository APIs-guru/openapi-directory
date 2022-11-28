from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCalendarsRequest:
    request: shared.Calendar = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCalendarsResponse:
    content_type: str = field()
    status_code: int = field()
    calendar: Optional[shared.Calendar] = field(default=None)
    
