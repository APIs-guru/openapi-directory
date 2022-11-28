import { SpeakeasyBase } from "../../../internal/utils";
export declare class TripsTripDetailsQueryParams extends SpeakeasyBase {
    trackToken?: string;
}
export declare class TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts extends SpeakeasyBase {
    city?: string;
    countryCode?: string;
    district?: string;
    house?: string;
    postalCode?: string;
    street?: string;
}
export declare class TripsTripDetails200ApplicationJsonResultTrackAddressStartParts extends SpeakeasyBase {
    city?: string;
    countryCode?: string;
    district?: string;
    house?: string;
    postalCode?: string;
    street?: string;
}
export declare class TripsTripDetails200ApplicationJsonResultTrackPoints extends SpeakeasyBase {
    alertType?: string;
    alertValue?: number;
    cornering?: boolean;
    course?: number;
    height?: number;
    id?: number;
    lateral?: number;
    latitude?: number;
    longitude?: number;
    midSpeed?: number;
    number?: number;
    phoneUsage?: boolean;
    pointDate?: string;
    speed?: number;
    speedLimit?: number;
    speedType?: string;
    totalMeters?: number;
    yaw?: number;
}
export declare class TripsTripDetails200ApplicationJsonResultTrack extends SpeakeasyBase {
    accelerationCount?: number;
    addressEnd?: string;
    addressFinishParts?: TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts;
    addressStart?: string;
    addressStartParts?: TripsTripDetails200ApplicationJsonResultTrackAddressStartParts;
    beaconId?: number;
    cityFinish?: string;
    cityStart?: string;
    decelerationCount?: number;
    distance?: number;
    drivingTips?: string;
    duration?: number;
    ecoScore?: number;
    ecoScoreBrakes?: number;
    ecoScoreDepreciation?: number;
    ecoScoreFuel?: number;
    ecoScoreTyres?: number;
    endDate?: string;
    highOverSpeedMileage?: number;
    midOverSpeedMileage?: number;
    originChanged?: boolean;
    phoneUsage?: number;
    points?: TripsTripDetails200ApplicationJsonResultTrackPoints[];
    rating?: number;
    rating100?: number;
    ratingAcceleration?: number;
    ratingAcceleration100?: number;
    ratingBraking?: number;
    ratingBraking100?: number;
    ratingCornering?: number;
    ratingCornering100?: number;
    ratingPhoneDistraction100?: number;
    ratingPhoneUsage?: number;
    ratingSpeeding?: number;
    ratingSpeeding100?: number;
    ratingTimeOfDay?: number;
    shareType?: string;
    startDate?: string;
    status?: string;
    trackOriginCode?: string;
}
export declare class TripsTripDetails200ApplicationJsonResult extends SpeakeasyBase {
    code?: number;
    track?: TripsTripDetails200ApplicationJsonResultTrack;
}
export declare class TripsTripDetails200ApplicationJson extends SpeakeasyBase {
    result?: TripsTripDetails200ApplicationJsonResult;
}
export declare class TripsTripDetailsRequest extends SpeakeasyBase {
    queryParams: TripsTripDetailsQueryParams;
}
export declare class TripsTripDetailsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    tripsTripDetails200ApplicationJsonObject?: TripsTripDetails200ApplicationJson;
}
