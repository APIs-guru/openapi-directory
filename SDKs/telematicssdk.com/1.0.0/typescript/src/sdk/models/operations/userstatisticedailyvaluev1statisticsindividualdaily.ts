import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDailyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccelerationCount" })
  accelerationCount?: number;

  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=AverageSpeedKmh" })
  averageSpeedKmh?: number;

  @Metadata({ data: "json, name=AverageSpeedMileh" })
  averageSpeedMileh?: number;

  @Metadata({ data: "json, name=BreakingCount" })
  breakingCount?: number;

  @Metadata({ data: "json, name=CompanyId" })
  companyId?: string;

  @Metadata({ data: "json, name=CorneringCount" })
  corneringCount?: number;

  @Metadata({ data: "json, name=DayDrivingTime" })
  dayDrivingTime?: number;

  @Metadata({ data: "json, name=DeviceToken" })
  deviceToken?: string;

  @Metadata({ data: "json, name=DriverTripsCount" })
  driverTripsCount?: number;

  @Metadata({ data: "json, name=DrivingTime" })
  drivingTime?: number;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=MaxSpeedKmh" })
  maxSpeedKmh?: number;

  @Metadata({ data: "json, name=MaxSpeedMileh" })
  maxSpeedMileh?: number;

  @Metadata({ data: "json, name=MileageKm" })
  mileageKm?: number;

  @Metadata({ data: "json, name=MileageMile" })
  mileageMile?: number;

  @Metadata({ data: "json, name=NightDrivingTime" })
  nightDrivingTime?: number;

  @Metadata({ data: "json, name=OtherTripsCount" })
  otherTripsCount?: number;

  @Metadata({ data: "json, name=PhoneUsageDistanceKm" })
  phoneUsageDistanceKm?: number;

  @Metadata({ data: "json, name=PhoneUsageDistanceMile" })
  phoneUsageDistanceMile?: number;

  @Metadata({ data: "json, name=PhoneUsageDurationMin" })
  phoneUsageDurationMin?: number;

  @Metadata({ data: "json, name=PhoneUsageOverSpeedDistanceKm" })
  phoneUsageOverSpeedDistanceKm?: number;

  @Metadata({ data: "json, name=PhoneUsageOverSpeedDistanceMile" })
  phoneUsageOverSpeedDistanceMile?: number;

  @Metadata({ data: "json, name=PhoneUsageOverSpeedDurationMin" })
  phoneUsageOverSpeedDurationMin?: number;

  @Metadata({ data: "json, name=ReportDate" })
  reportDate?: string;

  @Metadata({ data: "json, name=RushHoursDrivingTime" })
  rushHoursDrivingTime?: number;

  @Metadata({ data: "json, name=TotalSpeedingKm" })
  totalSpeedingKm?: number;

  @Metadata({ data: "json, name=TotalSpeedingMile" })
  totalSpeedingMile?: number;

  @Metadata({ data: "json, name=TripsCount" })
  tripsCount?: number;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors" })
  errors?: any[];

  @Metadata({ data: "json, name=Result", elemType: operations.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult })
  result?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult[];

  @Metadata({ data: "json, name=Status" })
  status?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}


export class UserStatisticeDailyValueV1StatisticsIndividualDailyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonObject?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson;
}
