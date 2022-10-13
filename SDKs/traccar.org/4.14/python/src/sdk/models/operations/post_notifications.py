from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNotificationsRequest:
    request: shared.Notification = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNotificationsResponse:
    content_type: str = field(default=None)
    notification: Optional[shared.Notification] = field(default=None)
    status_code: int = field(default=None)
    
