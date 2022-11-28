from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishVenueHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishVenueRequest:
    headers: PublishVenueHeaders = field()
    request: shared.Venue = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishVenueResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
