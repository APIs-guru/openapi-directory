import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;
}


export class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccelerationCount" })
  accelerationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=AverageSpeedKmh" })
  averageSpeedKmh?: number;

  @SpeakeasyMetadata({ data: "json, name=AverageSpeedMileh" })
  averageSpeedMileh?: number;

  @SpeakeasyMetadata({ data: "json, name=BreakingCount" })
  breakingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CompanyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=CorneringCount" })
  corneringCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DayDrivingTime" })
  dayDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceToken" })
  deviceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DriverTripsCount" })
  driverTripsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DrivingTime" })
  drivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxSpeedKmh" })
  maxSpeedKmh?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxSpeedMileh" })
  maxSpeedMileh?: number;

  @SpeakeasyMetadata({ data: "json, name=MileageKm" })
  mileageKm?: number;

  @SpeakeasyMetadata({ data: "json, name=MileageMile" })
  mileageMile?: number;

  @SpeakeasyMetadata({ data: "json, name=NightDrivingTime" })
  nightDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=OtherTripsCount" })
  otherTripsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageDistanceKm" })
  phoneUsageDistanceKm?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageDistanceMile" })
  phoneUsageDistanceMile?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageDurationMin" })
  phoneUsageDurationMin?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDistanceKm" })
  phoneUsageOverSpeedDistanceKm?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDistanceMile" })
  phoneUsageOverSpeedDistanceMile?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsageOverSpeedDurationMin" })
  phoneUsageOverSpeedDurationMin?: number;

  @SpeakeasyMetadata({ data: "json, name=RushHoursDrivingTime" })
  rushHoursDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSpeedingKm" })
  totalSpeedingKm?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSpeedingMile" })
  totalSpeedingMile?: number;

  @SpeakeasyMetadata({ data: "json, name=TripsCount" })
  tripsCount?: number;
}


export class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}


export class UserStatisticsAccumulatedValueV1StatisticsIndividualRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams;
}


export class UserStatisticsAccumulatedValueV1StatisticsIndividualResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson;
}
