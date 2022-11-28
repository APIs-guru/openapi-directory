from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNotificationsRequest:
    request: shared.Notification = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNotificationsResponse:
    content_type: str = field()
    status_code: int = field()
    notification: Optional[shared.Notification] = field(default=None)
    
