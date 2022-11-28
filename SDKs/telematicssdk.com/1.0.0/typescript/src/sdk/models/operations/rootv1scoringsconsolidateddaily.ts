import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RootV1ScoringsConsolidatedDailyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CompanyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DeviceToken" })
  deviceToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;
}


export class RootV1ScoringsConsolidatedDaily200ApplicationJsonResult extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=ReportDate" })
  reportDate?: string;

  @SpeakeasyMetadata({ data: "json, name=SpeedingScore" })
  speedingScore?: number;
}


export class RootV1ScoringsConsolidatedDaily200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: RootV1ScoringsConsolidatedDaily200ApplicationJsonResult })
  result?: RootV1ScoringsConsolidatedDaily200ApplicationJsonResult[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}


export class RootV1ScoringsConsolidatedDailyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RootV1ScoringsConsolidatedDailyQueryParams;
}


export class RootV1ScoringsConsolidatedDailyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  rootV1ScoringsConsolidatedDaily200ApplicationJsonObject?: RootV1ScoringsConsolidatedDaily200ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
