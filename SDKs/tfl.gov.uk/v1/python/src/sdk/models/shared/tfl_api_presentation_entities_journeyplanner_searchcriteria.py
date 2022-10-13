from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_timeadjustments

class TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum(str, Enum):
    ARRIVING = "Arriving"
    DEPARTING = "Departing"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerSearchCriteria:
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_time_type: Optional[TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTimeType' }})
    time_adjustments: Optional[tfl_api_presentation_entities_journeyplanner_timeadjustments.TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeAdjustments' }})
    
