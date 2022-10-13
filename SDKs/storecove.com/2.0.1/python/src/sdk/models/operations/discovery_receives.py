from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class DiscoveryReceivesRequest:
    request: shared.DiscoverableParticipant = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoveryReceivesResponse:
    content_type: str = field(default=None)
    discovered_participant: Optional[shared.DiscoveredParticipant] = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
