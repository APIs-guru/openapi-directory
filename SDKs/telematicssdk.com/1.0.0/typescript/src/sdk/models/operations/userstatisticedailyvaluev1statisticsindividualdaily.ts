import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=ReportDate" })
  reportDate?: string;

  @SpeakeasyMetadata({ data: "json, name=RushHoursDrivingTime" })
  rushHoursDrivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSpeedingKm" })
  totalSpeedingKm?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalSpeedingMile" })
  totalSpeedingMile?: number;

  @SpeakeasyMetadata({ data: "json, name=TripsCount" })
  tripsCount?: number;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult })
  result?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDailyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDailyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonObject?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson;
}
