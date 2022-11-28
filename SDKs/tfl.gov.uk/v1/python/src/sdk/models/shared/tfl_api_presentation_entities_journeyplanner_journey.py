from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerJourney:
    r"""TflAPIPresentationEntitiesJourneyPlannerJourney
    Object that represents an end to end journey (see schematic).
    """
    
    arrival_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrivalDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    fare: Optional[TflAPIPresentationEntitiesJourneyPlannerJourneyFare] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fare') }})
    legs: Optional[List[TflAPIPresentationEntitiesJourneyPlannerLeg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
