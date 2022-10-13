from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_linespecificservicetype


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineServiceType:
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineName' }})
    line_specific_service_types: Optional[List[tfl_api_presentation_entities_linespecificservicetype.TflAPIPresentationEntitiesLineSpecificServiceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSpecificServiceTypes' }})
    
