from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ModeGetActiveServiceTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_active_service_types: Optional[List[shared.TflAPIPresentationEntitiesActiveServiceType]] = field(default=None)
    
