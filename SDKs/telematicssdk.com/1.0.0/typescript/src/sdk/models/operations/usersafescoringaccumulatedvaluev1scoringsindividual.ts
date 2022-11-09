import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccelerationScore" })
  accelerationScore?: number;

  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BrakingScore" })
  brakingScore?: number;

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


export class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors" })
  errors?: any[];

  @Metadata({ data: "json, name=Result" })
  result?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult;

  @Metadata({ data: "json, name=Status" })
  status?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson;
}
