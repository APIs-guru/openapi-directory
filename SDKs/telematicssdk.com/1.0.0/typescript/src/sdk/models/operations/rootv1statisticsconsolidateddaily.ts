import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RootV1StatisticsConsolidatedDailyQueryParams extends SpeakeasyBase {
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


export class RootV1StatisticsConsolidatedDailyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RootV1StatisticsConsolidatedDailyQueryParams;
}


export class RootV1StatisticsConsolidatedDailyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
