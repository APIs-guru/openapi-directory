from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccidentStatsGetPathParams:
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccidentStatsGetRequest:
    path_params: AccidentStatsGetPathParams = field()
    

@dataclass
class AccidentStatsGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_accident_stats_accident_details: Optional[List[shared.TflAPIPresentationEntitiesAccidentStatsAccidentDetail]] = field(default=None)
    
