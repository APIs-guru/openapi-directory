from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV1LocationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    locations_result: Optional[shared.LocationsResult] = field(default=None)
    
