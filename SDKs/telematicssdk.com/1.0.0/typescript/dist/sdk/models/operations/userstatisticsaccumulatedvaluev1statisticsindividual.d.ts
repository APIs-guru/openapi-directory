import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult extends SpeakeasyBase {
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
    rushHoursDrivingTime?: number;
    totalSpeedingKm?: number;
    totalSpeedingMile?: number;
    tripsCount?: number;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson extends SpeakeasyBase {
    errors?: any[];
    result?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonResult;
    status?: number;
    title?: string;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividualRequest extends SpeakeasyBase {
    queryParams: UserStatisticsAccumulatedValueV1StatisticsIndividualQueryParams;
}
export declare class UserStatisticsAccumulatedValueV1StatisticsIndividualResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject?: UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson;
}
