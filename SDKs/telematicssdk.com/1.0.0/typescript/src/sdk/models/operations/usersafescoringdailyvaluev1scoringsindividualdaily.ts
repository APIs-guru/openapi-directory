import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccelerationScore" })
  accelerationScore?: number;

  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BrakingScore" })
  brakingScore?: number;

  @Metadata({ data: "json, name=CalcDate" })
  calcDate?: string;

  @Metadata({ data: "json, name=CompanyId" })
  companyId?: string;

  @Metadata({ data: "json, name=CorneringScore" })
  corneringScore?: number;

  @Metadata({ data: "json, name=DeviceToken" })
  deviceToken?: string;

  @Metadata({ data: "json, name=DistractedScore" })
  distractedScore?: number;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=OverallScore" })
  overallScore?: number;

  @Metadata({ data: "json, name=SpeedingScore" })
  speedingScore?: number;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors" })
  errors?: any[];

  @Metadata({ data: "json, name=Result", elemType: operations.UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult })
  result?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult[];

  @Metadata({ data: "json, name=Status" })
  status?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}


export class UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonObject?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson;
}
