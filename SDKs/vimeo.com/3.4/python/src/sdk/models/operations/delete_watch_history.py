from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteWatchHistorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteWatchHistoryRequest:
    security: DeleteWatchHistorySecurity = field()
    

@dataclass
class DeleteWatchHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    
