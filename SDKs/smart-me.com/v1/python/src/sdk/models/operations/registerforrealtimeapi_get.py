from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RegisterForRealtimeAPIGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    register_realtime_api_data: Optional[List[shared.RegisterRealtimeAPIData]] = field(default=None)
    status_code: int = field(default=None)
    
