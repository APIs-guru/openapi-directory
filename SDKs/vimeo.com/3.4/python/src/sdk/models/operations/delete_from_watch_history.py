from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteFromWatchHistoryPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFromWatchHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFromWatchHistoryRequest:
    path_params: DeleteFromWatchHistoryPathParams = field()
    security: DeleteFromWatchHistorySecurity = field()
    

@dataclass
class DeleteFromWatchHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    
