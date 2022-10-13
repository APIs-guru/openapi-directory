from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointMetaCategoriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_stop_point_categories: Optional[List[shared.TflAPIPresentationEntitiesStopPointCategory]] = field(default=None)
    
