from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNotificationsTypesResponse:
    content_type: str = field(default=None)
    notification_types: Optional[List[shared.NotificationType]] = field(default=None)
    status_code: int = field(default=None)
    
