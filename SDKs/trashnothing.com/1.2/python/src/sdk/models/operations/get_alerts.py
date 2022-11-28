from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsResponse:
    content_type: str = field()
    status_code: int = field()
    alerts: Optional[List[shared.Alert]] = field(default=None)
    
