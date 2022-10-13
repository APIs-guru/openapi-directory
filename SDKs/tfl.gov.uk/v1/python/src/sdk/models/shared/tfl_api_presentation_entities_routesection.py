from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_routesectionnaptanentrysequence


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSection:
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineString' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originationName' }})
    route_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeCode' }})
    route_section_naptan_entry_sequence: Optional[List[tfl_api_presentation_entities_routesectionnaptanentrysequence.TflAPIPresentationEntitiesRouteSectionNaptanEntrySequence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeSectionNaptanEntrySequence' }})
    valid_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
