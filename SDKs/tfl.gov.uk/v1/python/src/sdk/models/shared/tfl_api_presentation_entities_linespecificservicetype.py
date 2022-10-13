from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_lineservicetypeinfo


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineSpecificServiceType:
    service_type: Optional[tfl_api_presentation_entities_lineservicetypeinfo.TflAPIPresentationEntitiesLineServiceTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    stop_serves_service_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopServesServiceType' }})
    
