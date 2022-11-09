import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RootV1StatisticsConsolidatedQueryParams extends SpeakeasyBase {
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


export class RootV1StatisticsConsolidatedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RootV1StatisticsConsolidatedQueryParams;
}


export class RootV1StatisticsConsolidatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
