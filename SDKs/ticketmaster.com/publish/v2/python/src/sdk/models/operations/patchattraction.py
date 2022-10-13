from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PatchAttractionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAttractionHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PatchAttractionRequest:
    path_params: PatchAttractionPathParams = field(default=None)
    headers: PatchAttractionHeaders = field(default=None)
    request: shared.AugmentationData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchAttractionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
