from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TripsTripDetailsQueryParams:
    track_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trackToken', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCode') }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('District') }})
    house: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('House') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street') }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSONResultTrackAddressStartParts:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('City') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountryCode') }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('District') }})
    house: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('House') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostalCode') }})
    street: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Street') }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSONResultTrackPoints:
    alert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertType') }})
    alert_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlertValue') }})
    cornering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cornering') }})
    course: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Course') }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    lateral: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lateral') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    mid_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MidSpeed') }})
    number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    phone_usage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneUsage') }})
    point_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointDate') }})
    speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Speed') }})
    speed_limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeedLimit') }})
    speed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeedType') }})
    total_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalMeters') }})
    yaw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Yaw') }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSONResultTrack:
    acceleration_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccelerationCount') }})
    address_end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressEnd') }})
    address_finish_parts: Optional[TripsTripDetails200ApplicationJSONResultTrackAddressFinishParts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressFinishParts') }})
    address_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressStart') }})
    address_start_parts: Optional[TripsTripDetails200ApplicationJSONResultTrackAddressStartParts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressStartParts') }})
    beacon_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeaconId') }})
    city_finish: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityFinish') }})
    city_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CityStart') }})
    deceleration_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecelerationCount') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distance') }})
    driving_tips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DrivingTips') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    eco_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcoScore') }})
    eco_score_brakes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcoScoreBrakes') }})
    eco_score_depreciation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcoScoreDepreciation') }})
    eco_score_fuel: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcoScoreFuel') }})
    eco_score_tyres: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcoScoreTyres') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    high_over_speed_mileage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HighOverSpeedMileage') }})
    mid_over_speed_mileage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MidOverSpeedMileage') }})
    origin_changed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginChanged') }})
    phone_usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhoneUsage') }})
    points: Optional[List[TripsTripDetails200ApplicationJSONResultTrackPoints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Points') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rating') }})
    rating100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rating100') }})
    rating_acceleration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingAcceleration') }})
    rating_acceleration100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingAcceleration100') }})
    rating_braking: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingBraking') }})
    rating_braking100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingBraking100') }})
    rating_cornering: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingCornering') }})
    rating_cornering100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingCornering100') }})
    rating_phone_distraction100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingPhoneDistraction100') }})
    rating_phone_usage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingPhoneUsage') }})
    rating_speeding: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingSpeeding') }})
    rating_speeding100: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingSpeeding100') }})
    rating_time_of_day: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RatingTimeOfDay') }})
    share_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareType') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    track_origin_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackOriginCode') }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSONResult:
    code: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    track: Optional[TripsTripDetails200ApplicationJSONResultTrack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Track') }})
    

@dataclass_json
@dataclass
class TripsTripDetails200ApplicationJSON:
    result: Optional[TripsTripDetails200ApplicationJSONResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    

@dataclass
class TripsTripDetailsRequest:
    query_params: TripsTripDetailsQueryParams = field()
    

@dataclass
class TripsTripDetailsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    trips_trip_details_200_application_json_object: Optional[TripsTripDetails200ApplicationJSON] = field(default=None)
    
