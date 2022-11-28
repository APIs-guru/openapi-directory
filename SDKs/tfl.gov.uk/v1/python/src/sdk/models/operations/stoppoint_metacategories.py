from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointMetaCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_point_categories: Optional[List[shared.TflAPIPresentationEntitiesStopPointCategory]] = field(default=None)
    
