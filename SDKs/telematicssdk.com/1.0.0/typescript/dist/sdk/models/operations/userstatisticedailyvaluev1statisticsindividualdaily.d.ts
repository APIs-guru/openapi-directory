import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
    accelerationCount?: number;
    appId?: string;
    averageSpeedKmh?: number;
    averageSpeedMileh?: number;
    breakingCount?: number;
    companyId?: string;
    corneringCount?: number;
    dayDrivingTime?: number;
    deviceToken?: string;
    driverTripsCount?: number;
    drivingTime?: number;
    instanceId?: string;
    maxSpeedKmh?: number;
    maxSpeedMileh?: number;
    mileageKm?: number;
    mileageMile?: number;
    nightDrivingTime?: number;
    otherTripsCount?: number;
    phoneUsageDistanceKm?: number;
    phoneUsageDistanceMile?: number;
    phoneUsageDurationMin?: number;
    phoneUsageOverSpeedDistanceKm?: number;
    phoneUsageOverSpeedDistanceMile?: number;
    phoneUsageOverSpeedDurationMin?: number;
    reportDate?: string;
    rushHoursDrivingTime?: number;
    totalSpeedingKm?: number;
    totalSpeedingMile?: number;
    tripsCount?: number;
}
export declare class UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson extends SpeakeasyBase {
    errors?: any[];
    result?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonResult[];
    status?: number;
    title?: string;
}
export declare class UserStatisticeDailyValueV1StatisticsIndividualDailyRequest extends SpeakeasyBase {
    queryParams: UserStatisticeDailyValueV1StatisticsIndividualDailyQueryParams;
}
export declare class UserStatisticeDailyValueV1StatisticsIndividualDailyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJsonObject?: UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson;
}
