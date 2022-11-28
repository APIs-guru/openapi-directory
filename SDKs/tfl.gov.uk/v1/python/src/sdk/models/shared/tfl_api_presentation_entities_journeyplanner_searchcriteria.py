from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum(str, Enum):
    ARRIVING = "Arriving"
    DEPARTING = "Departing"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerSearchCriteria:
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_time_type: Optional[TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeType') }})
    time_adjustments: Optional[TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeAdjustments') }})
    
