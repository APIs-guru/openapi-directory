from dataclasses import dataclass, field



@dataclass
class DeleteWatchHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWatchHistoryRequest:
    security: DeleteWatchHistorySecurity = field(default=None)
    

@dataclass
class DeleteWatchHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
