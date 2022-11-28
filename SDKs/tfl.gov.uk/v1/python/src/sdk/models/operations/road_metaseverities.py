from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoadMetaSeveritiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_status_severities: Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]] = field(default=None)
    
