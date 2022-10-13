from dataclasses import dataclass, field



@dataclass
class DeleteFromWatchHistoryPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFromWatchHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFromWatchHistoryRequest:
    path_params: DeleteFromWatchHistoryPathParams = field(default=None)
    security: DeleteFromWatchHistorySecurity = field(default=None)
    

@dataclass
class DeleteFromWatchHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
