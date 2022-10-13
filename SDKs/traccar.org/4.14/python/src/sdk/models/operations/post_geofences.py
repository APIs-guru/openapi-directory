from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGeofencesRequest:
    request: shared.Geofence = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGeofencesResponse:
    content_type: str = field(default=None)
    geofence: Optional[shared.Geofence] = field(default=None)
    status_code: int = field(default=None)
    
