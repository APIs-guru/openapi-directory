import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TripsTripDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trackToken" })
  trackToken?: string;
}


export class TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=District" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=House" })
  house?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Street" })
  street?: string;
}


export class TripsTripDetails200ApplicationJsonResultTrackAddressStartParts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=District" })
  district?: string;

  @SpeakeasyMetadata({ data: "json, name=House" })
  house?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Street" })
  street?: string;
}


export class TripsTripDetails200ApplicationJsonResultTrackPoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlertType" })
  alertType?: string;

  @SpeakeasyMetadata({ data: "json, name=AlertValue" })
  alertValue?: number;

  @SpeakeasyMetadata({ data: "json, name=Cornering" })
  cornering?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Course" })
  course?: number;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Lateral" })
  lateral?: number;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=MidSpeed" })
  midSpeed?: number;

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsage" })
  phoneUsage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PointDate" })
  pointDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Speed" })
  speed?: number;

  @SpeakeasyMetadata({ data: "json, name=SpeedLimit" })
  speedLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SpeedType" })
  speedType?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalMeters" })
  totalMeters?: number;

  @SpeakeasyMetadata({ data: "json, name=Yaw" })
  yaw?: number;
}


export class TripsTripDetails200ApplicationJsonResultTrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccelerationCount" })
  accelerationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=AddressEnd" })
  addressEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=AddressFinishParts" })
  addressFinishParts?: TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts;

  @SpeakeasyMetadata({ data: "json, name=AddressStart" })
  addressStart?: string;

  @SpeakeasyMetadata({ data: "json, name=AddressStartParts" })
  addressStartParts?: TripsTripDetails200ApplicationJsonResultTrackAddressStartParts;

  @SpeakeasyMetadata({ data: "json, name=BeaconId" })
  beaconId?: number;

  @SpeakeasyMetadata({ data: "json, name=CityFinish" })
  cityFinish?: string;

  @SpeakeasyMetadata({ data: "json, name=CityStart" })
  cityStart?: string;

  @SpeakeasyMetadata({ data: "json, name=DecelerationCount" })
  decelerationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=DrivingTips" })
  drivingTips?: string;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=EcoScore" })
  ecoScore?: number;

  @SpeakeasyMetadata({ data: "json, name=EcoScoreBrakes" })
  ecoScoreBrakes?: number;

  @SpeakeasyMetadata({ data: "json, name=EcoScoreDepreciation" })
  ecoScoreDepreciation?: number;

  @SpeakeasyMetadata({ data: "json, name=EcoScoreFuel" })
  ecoScoreFuel?: number;

  @SpeakeasyMetadata({ data: "json, name=EcoScoreTyres" })
  ecoScoreTyres?: number;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=HighOverSpeedMileage" })
  highOverSpeedMileage?: number;

  @SpeakeasyMetadata({ data: "json, name=MidOverSpeedMileage" })
  midOverSpeedMileage?: number;

  @SpeakeasyMetadata({ data: "json, name=OriginChanged" })
  originChanged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PhoneUsage" })
  phoneUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=Points", elemType: TripsTripDetails200ApplicationJsonResultTrackPoints })
  points?: TripsTripDetails200ApplicationJsonResultTrackPoints[];

  @SpeakeasyMetadata({ data: "json, name=Rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=Rating100" })
  rating100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingAcceleration" })
  ratingAcceleration?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingAcceleration100" })
  ratingAcceleration100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingBraking" })
  ratingBraking?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingBraking100" })
  ratingBraking100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingCornering" })
  ratingCornering?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingCornering100" })
  ratingCornering100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingPhoneDistraction100" })
  ratingPhoneDistraction100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingPhoneUsage" })
  ratingPhoneUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingSpeeding" })
  ratingSpeeding?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingSpeeding100" })
  ratingSpeeding100?: number;

  @SpeakeasyMetadata({ data: "json, name=RatingTimeOfDay" })
  ratingTimeOfDay?: number;

  @SpeakeasyMetadata({ data: "json, name=ShareType" })
  shareType?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=TrackOriginCode" })
  trackOriginCode?: string;
}


export class TripsTripDetails200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=Track" })
  track?: TripsTripDetails200ApplicationJsonResultTrack;
}


export class TripsTripDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: TripsTripDetails200ApplicationJsonResult;
}


export class TripsTripDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TripsTripDetailsQueryParams;
}


export class TripsTripDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tripsTripDetails200ApplicationJsonObject?: TripsTripDetails200ApplicationJson;
}
