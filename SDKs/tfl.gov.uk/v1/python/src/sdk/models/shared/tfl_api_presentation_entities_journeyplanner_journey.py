from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_journeyfare
from . import tfl_api_presentation_entities_journeyplanner_leg


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerJourney:
    arrival_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrivalDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    fare: Optional[tfl_api_presentation_entities_journeyplanner_journeyfare.TflAPIPresentationEntitiesJourneyPlannerJourneyFare] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fare' }})
    legs: Optional[List[tfl_api_presentation_entities_journeyplanner_leg.TflAPIPresentationEntitiesJourneyPlannerLeg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legs' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
