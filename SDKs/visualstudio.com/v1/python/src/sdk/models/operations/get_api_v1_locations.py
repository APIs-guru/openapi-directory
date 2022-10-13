from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV1LocationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    locations_result: Optional[shared.LocationsResult] = field(default=None)
    status_code: int = field(default=None)
    
