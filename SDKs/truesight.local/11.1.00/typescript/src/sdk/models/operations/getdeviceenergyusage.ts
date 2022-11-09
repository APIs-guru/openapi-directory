import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceEnergyUsagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}

export enum GetDeviceEnergyUsageBasisEnum {
    Monthly = "MONTHLY"
,    Daily = "DAILY"
,    Hourly = "HOURLY"
}

export enum GetDeviceEnergyUsageRollPeriodEnum {
    OneDay = "ONE_DAY"
,    OneWeek = "ONE_WEEK"
,    OneMonth = "ONE_MONTH"
,    SixMonths = "SIX_MONTHS"
,    OneYear = "ONE_YEAR"
}


export class GetDeviceEnergyUsageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=basis" })
  basis?: GetDeviceEnergyUsageBasisEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rollPeriod" })
  rollPeriod?: GetDeviceEnergyUsageRollPeriodEnum;
}


export class GetDeviceEnergyUsageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceEnergyUsagePathParams;

  @Metadata()
  queryParams: GetDeviceEnergyUsageQueryParams;
}


export class GetDeviceEnergyUsageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
