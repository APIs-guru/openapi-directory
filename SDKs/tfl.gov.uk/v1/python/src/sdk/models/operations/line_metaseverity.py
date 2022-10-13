from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineMetaSeverityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_status_severities: Optional[List[shared.TflAPIPresentationEntitiesStatusSeverity]] = field(default=None)
    
