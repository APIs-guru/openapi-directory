from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass
class UserStatisticeDailyValueV1StatisticsIndividualDailyRequest:
    query_params: UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult:
    acceleration_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccelerationCount' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    average_speed_kmh: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageSpeedKmh' }})
    average_speed_mileh: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageSpeedMileh' }})
    breaking_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BreakingCount' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyId' }})
    cornering_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CorneringCount' }})
    day_driving_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayDrivingTime' }})
    device_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceToken' }})
    driver_trips_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DriverTripsCount' }})
    driving_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DrivingTime' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    max_speed_kmh: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSpeedKmh' }})
    max_speed_mileh: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSpeedMileh' }})
    mileage_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MileageKm' }})
    mileage_mile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MileageMile' }})
    night_driving_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NightDrivingTime' }})
    other_trips_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherTripsCount' }})
    phone_usage_distance_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageDistanceKm' }})
    phone_usage_distance_mile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageDistanceMile' }})
    phone_usage_duration_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageDurationMin' }})
    phone_usage_over_speed_distance_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageOverSpeedDistanceKm' }})
    phone_usage_over_speed_distance_mile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageOverSpeedDistanceMile' }})
    phone_usage_over_speed_duration_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhoneUsageOverSpeedDurationMin' }})
    report_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReportDate' }})
    rush_hours_driving_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RushHoursDrivingTime' }})
    total_speeding_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalSpeedingKm' }})
    total_speeding_mile: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalSpeedingMile' }})
    trips_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TripsCount' }})
    

@dataclass_json
@dataclass
class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON:
    errors: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    result: Optional[List[UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    status: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    

@dataclass
class UserStatisticeDailyValueV1StatisticsIndividualDailyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    user_statistice_daily_value_v1_statistics_individual_daily_200_application_json_object: Optional[UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON] = field(default=None)
    
