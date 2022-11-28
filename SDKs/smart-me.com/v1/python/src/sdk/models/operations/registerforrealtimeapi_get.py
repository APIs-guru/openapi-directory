from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RegisterForRealtimeAPIGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    register_realtime_api_data: Optional[List[shared.RegisterRealtimeAPIData]] = field(default=None)
    
