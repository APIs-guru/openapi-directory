import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RootV1ScoringsConsolidatedDailyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AppId" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CompanyId" })
  companyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeviceToken" })
  deviceToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: string;
}


export class RootV1ScoringsConsolidatedDailyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RootV1ScoringsConsolidatedDailyQueryParams;
}


export class RootV1ScoringsConsolidatedDaily200ApplicationJsonResult extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=ReportDate" })
  reportDate?: string;

  @Metadata({ data: "json, name=SpeedingScore" })
  speedingScore?: number;
}


export class RootV1ScoringsConsolidatedDaily200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors" })
  errors?: any[];

  @Metadata({ data: "json, name=Result", elemType: operations.RootV1ScoringsConsolidatedDaily200ApplicationJsonResult })
  result?: RootV1ScoringsConsolidatedDaily200ApplicationJsonResult[];

  @Metadata({ data: "json, name=Status" })
  status?: number;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}


export class RootV1ScoringsConsolidatedDailyResponse extends SpeakeasyBase {
  @Metadata()
  rootV1ScoringsConsolidatedDaily200ApplicationJsonObject?: RootV1ScoringsConsolidatedDaily200ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
