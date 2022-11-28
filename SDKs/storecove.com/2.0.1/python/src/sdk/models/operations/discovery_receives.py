from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class DiscoveryReceivesRequest:
    request: shared.DiscoverableParticipant = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoveryReceivesResponse:
    content_type: str = field()
    status_code: int = field()
    discovered_participant: Optional[shared.DiscoveredParticipant] = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    
