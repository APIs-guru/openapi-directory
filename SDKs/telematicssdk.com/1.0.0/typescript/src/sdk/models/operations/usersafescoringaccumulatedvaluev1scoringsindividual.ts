import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccelerationScore" })
  accelerationScore?: number;

  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=BrakingScore" })
  brakingScore?: number;

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


export class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams;
}


export class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson;
}
