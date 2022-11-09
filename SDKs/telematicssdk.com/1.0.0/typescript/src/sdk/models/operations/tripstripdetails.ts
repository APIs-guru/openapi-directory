import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TripsTripDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=trackToken" })
  trackToken?: string;
}


export class TripsTripDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TripsTripDetailsQueryParams;
}


export class TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=District" })
  district?: string;

  @Metadata({ data: "json, name=House" })
  house?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Street" })
  street?: string;
}


export class TripsTripDetails200ApplicationJsonResultTrackAddressStartParts extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=CountryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=District" })
  district?: string;

  @Metadata({ data: "json, name=House" })
  house?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Street" })
  street?: string;
}


export class TripsTripDetails200ApplicationJsonResultTrackPoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlertType" })
  alertType?: string;

  @Metadata({ data: "json, name=AlertValue" })
  alertValue?: number;

  @Metadata({ data: "json, name=Cornering" })
  cornering?: boolean;

  @Metadata({ data: "json, name=Course" })
  course?: number;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Lateral" })
  lateral?: number;

  @Metadata({ data: "json, name=Latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=MidSpeed" })
  midSpeed?: number;

  @Metadata({ data: "json, name=Number" })
  number?: number;

  @Metadata({ data: "json, name=PhoneUsage" })
  phoneUsage?: boolean;

  @Metadata({ data: "json, name=PointDate" })
  pointDate?: string;

  @Metadata({ data: "json, name=Speed" })
  speed?: number;

  @Metadata({ data: "json, name=SpeedLimit" })
  speedLimit?: number;

  @Metadata({ data: "json, name=SpeedType" })
  speedType?: string;

  @Metadata({ data: "json, name=TotalMeters" })
  totalMeters?: number;

  @Metadata({ data: "json, name=Yaw" })
  yaw?: number;
}


export class TripsTripDetails200ApplicationJsonResultTrack extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccelerationCount" })
  accelerationCount?: number;

  @Metadata({ data: "json, name=AddressEnd" })
  addressEnd?: string;

  @Metadata({ data: "json, name=AddressFinishParts" })
  addressFinishParts?: TripsTripDetails200ApplicationJsonResultTrackAddressFinishParts;

  @Metadata({ data: "json, name=AddressStart" })
  addressStart?: string;

  @Metadata({ data: "json, name=AddressStartParts" })
  addressStartParts?: TripsTripDetails200ApplicationJsonResultTrackAddressStartParts;

  @Metadata({ data: "json, name=BeaconId" })
  beaconId?: number;

  @Metadata({ data: "json, name=CityFinish" })
  cityFinish?: string;

  @Metadata({ data: "json, name=CityStart" })
  cityStart?: string;

  @Metadata({ data: "json, name=DecelerationCount" })
  decelerationCount?: number;

  @Metadata({ data: "json, name=Distance" })
  distance?: number;

  @Metadata({ data: "json, name=DrivingTips" })
  drivingTips?: string;

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=EcoScore" })
  ecoScore?: number;

  @Metadata({ data: "json, name=EcoScoreBrakes" })
  ecoScoreBrakes?: number;

  @Metadata({ data: "json, name=EcoScoreDepreciation" })
  ecoScoreDepreciation?: number;

  @Metadata({ data: "json, name=EcoScoreFuel" })
  ecoScoreFuel?: number;

  @Metadata({ data: "json, name=EcoScoreTyres" })
  ecoScoreTyres?: number;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=HighOverSpeedMileage" })
  highOverSpeedMileage?: number;

  @Metadata({ data: "json, name=MidOverSpeedMileage" })
  midOverSpeedMileage?: number;

  @Metadata({ data: "json, name=OriginChanged" })
  originChanged?: boolean;

  @Metadata({ data: "json, name=PhoneUsage" })
  phoneUsage?: number;

  @Metadata({ data: "json, name=Points", elemType: operations.TripsTripDetails200ApplicationJsonResultTrackPoints })
  points?: TripsTripDetails200ApplicationJsonResultTrackPoints[];

  @Metadata({ data: "json, name=Rating" })
  rating?: number;

  @Metadata({ data: "json, name=Rating100" })
  rating100?: number;

  @Metadata({ data: "json, name=RatingAcceleration" })
  ratingAcceleration?: number;

  @Metadata({ data: "json, name=RatingAcceleration100" })
  ratingAcceleration100?: number;

  @Metadata({ data: "json, name=RatingBraking" })
  ratingBraking?: number;

  @Metadata({ data: "json, name=RatingBraking100" })
  ratingBraking100?: number;

  @Metadata({ data: "json, name=RatingCornering" })
  ratingCornering?: number;

  @Metadata({ data: "json, name=RatingCornering100" })
  ratingCornering100?: number;

  @Metadata({ data: "json, name=RatingPhoneDistraction100" })
  ratingPhoneDistraction100?: number;

  @Metadata({ data: "json, name=RatingPhoneUsage" })
  ratingPhoneUsage?: number;

  @Metadata({ data: "json, name=RatingSpeeding" })
  ratingSpeeding?: number;

  @Metadata({ data: "json, name=RatingSpeeding100" })
  ratingSpeeding100?: number;

  @Metadata({ data: "json, name=RatingTimeOfDay" })
  ratingTimeOfDay?: number;

  @Metadata({ data: "json, name=ShareType" })
  shareType?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=TrackOriginCode" })
  trackOriginCode?: string;
}


export class TripsTripDetails200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: number;

  @Metadata({ data: "json, name=Track" })
  track?: TripsTripDetails200ApplicationJsonResultTrack;
}


export class TripsTripDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Result" })
  result?: TripsTripDetails200ApplicationJsonResult;
}


export class TripsTripDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  tripsTripDetails200ApplicationJsonObject?: TripsTripDetails200ApplicationJson;
}
