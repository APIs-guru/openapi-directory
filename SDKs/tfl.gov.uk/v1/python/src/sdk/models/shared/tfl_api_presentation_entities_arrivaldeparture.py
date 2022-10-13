from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_predictiontiming

class TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum(str, Enum):
    ON_TIME = "OnTime"
    DELAYED = "Delayed"
    CANCELLED = "Cancelled"
    NOT_STOPPING_AT_STATION = "NotStoppingAtStation"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesArrivalDeparture:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    departure_status: Optional[TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureStatus' }})
    destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationName' }})
    destination_naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationNaptanId' }})
    estimated_time_of_arrival: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTimeOfArrival', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    estimated_time_of_departure: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTimeOfDeparture', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    minutes_and_seconds_to_arrival: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutesAndSecondsToArrival' }})
    minutes_and_seconds_to_departure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutesAndSecondsToDeparture' }})
    naptan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naptanId' }})
    platform_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformName' }})
    scheduled_time_of_arrival: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledTimeOfArrival', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_time_of_departure: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledTimeOfDeparture', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    station_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationName' }})
    timing: Optional[tfl_api_presentation_entities_predictiontiming.TflAPIPresentationEntitiesPredictionTiming] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timing' }})
    
