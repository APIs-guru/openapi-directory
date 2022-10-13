from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCalendarsRequest:
    request: shared.Calendar = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCalendarsResponse:
    calendar: Optional[shared.Calendar] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
