from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishAttractionVideosPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishAttractionVideosHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishAttractionVideosRequest:
    headers: PublishAttractionVideosHeaders = field()
    path_params: PublishAttractionVideosPathParams = field()
    request: shared.Video = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishAttractionVideosResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
