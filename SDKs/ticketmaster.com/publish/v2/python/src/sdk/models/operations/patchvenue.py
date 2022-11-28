from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchVenuePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVenueHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVenueRequest:
    headers: PatchVenueHeaders = field()
    path_params: PatchVenuePathParams = field()
    request: shared.AugmentationData = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchVenueResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
