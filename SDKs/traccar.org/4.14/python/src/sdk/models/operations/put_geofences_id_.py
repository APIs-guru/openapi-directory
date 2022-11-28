from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGeofencesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGeofencesIDRequest:
    path_params: PutGeofencesIDPathParams = field()
    request: shared.Geofence = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGeofencesIDResponse:
    content_type: str = field()
    status_code: int = field()
    geofence: Optional[shared.Geofence] = field(default=None)
    
