import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceEnergyUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}

export enum GetDeviceEnergyUsageBasisEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    Hourly = "HOURLY"
}

export enum GetDeviceEnergyUsageRollPeriodEnum {
    OneDay = "ONE_DAY",
    OneWeek = "ONE_WEEK",
    OneMonth = "ONE_MONTH",
    SixMonths = "SIX_MONTHS",
    OneYear = "ONE_YEAR"
}


export class GetDeviceEnergyUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=basis" })
  basis?: GetDeviceEnergyUsageBasisEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rollPeriod" })
  rollPeriod?: GetDeviceEnergyUsageRollPeriodEnum;
}


export class GetDeviceEnergyUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceEnergyUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDeviceEnergyUsageQueryParams;
}


export class GetDeviceEnergyUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
