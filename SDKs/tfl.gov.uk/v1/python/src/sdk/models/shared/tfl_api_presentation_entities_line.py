from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_crowding
from . import tfl_api_presentation_entities_disruption
from . import tfl_api_presentation_entities_linestatus
from . import tfl_api_presentation_entities_matchedroute
from . import tfl_api_presentation_entities_lineservicetypeinfo


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLine:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    crowding: Optional[tfl_api_presentation_entities_crowding.TflAPIPresentationEntitiesCrowding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crowding' }})
    disruptions: Optional[List[tfl_api_presentation_entities_disruption.TflAPIPresentationEntitiesDisruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptions' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_statuses: Optional[List[tfl_api_presentation_entities_linestatus.TflAPIPresentationEntitiesLineStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineStatuses' }})
    mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modeName' }})
    modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    route_sections: Optional[List[tfl_api_presentation_entities_matchedroute.TflAPIPresentationEntitiesMatchedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSections' }})
    service_types: Optional[List[tfl_api_presentation_entities_lineservicetypeinfo.TflAPIPresentationEntitiesLineServiceTypeInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceTypes' }})
    
