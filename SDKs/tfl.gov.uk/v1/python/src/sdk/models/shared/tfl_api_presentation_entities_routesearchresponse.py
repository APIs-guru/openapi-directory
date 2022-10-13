from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_routesearchmatch


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSearchResponse:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    search_matches: Optional[List[tfl_api_presentation_entities_routesearchmatch.TflAPIPresentationEntitiesRouteSearchMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMatches' }})
    
