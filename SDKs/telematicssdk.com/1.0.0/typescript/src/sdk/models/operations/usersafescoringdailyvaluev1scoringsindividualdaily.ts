import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccelerationScore" })
  accelerationScore?: number;

  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=BrakingScore" })
  brakingScore?: number;

  @SpeakeasyMetadata({ data: "json, name=CalcDate" })
  calcDate?: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=CorneringScore" })
  corneringScore?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceToken" })
  deviceToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DistractedScore" })
  distractedScore?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=OverallScore" })
  overallScore?: number;

  @SpeakeasyMetadata({ data: "json, name=SpeedingScore" })
  speedingScore?: number;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult })
  result?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonObject?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson;
}
