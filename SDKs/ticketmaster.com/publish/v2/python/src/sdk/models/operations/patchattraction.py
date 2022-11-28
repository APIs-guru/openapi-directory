from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAttractionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAttractionHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAttractionRequest:
    headers: PatchAttractionHeaders = field()
    path_params: PatchAttractionPathParams = field()
    request: shared.AugmentationData = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchAttractionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
