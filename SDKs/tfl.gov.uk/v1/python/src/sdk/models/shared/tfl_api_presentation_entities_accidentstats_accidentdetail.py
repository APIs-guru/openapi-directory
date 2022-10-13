from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_accidentstats_casualty
from . import tfl_api_presentation_entities_accidentstats_vehicle


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesAccidentStatsAccidentDetail:
    borough: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borough' }})
    casualties: Optional[List[tfl_api_presentation_entities_accidentstats_casualty.TflAPIPresentationEntitiesAccidentStatsCasualty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'casualties' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    vehicles: Optional[List[tfl_api_presentation_entities_accidentstats_vehicle.TflAPIPresentationEntitiesAccidentStatsVehicle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicles' }})
    
