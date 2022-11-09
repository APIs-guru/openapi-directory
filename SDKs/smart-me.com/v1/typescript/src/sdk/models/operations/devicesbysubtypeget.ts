import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DevicesBySubTypeGetMeterSubTypeEnum {
    MeterSubTypeUnknown = "MeterSubTypeUnknown"
,    MeterSubTypeCold = "MeterSubTypeCold"
,    MeterSubTypeHeat = "MeterSubTypeHeat"
,    MeterSubTypeChargingStation = "MeterSubTypeChargingStation"
,    MeterSubTypeElectricity = "MeterSubTypeElectricity"
,    MeterSubTypeWater = "MeterSubTypeWater"
,    MeterSubTypeGas = "MeterSubTypeGas"
,    MeterSubTypeElectricityHeat = "MeterSubTypeElectricityHeat"
,    MeterSubTypeTemperature = "MeterSubTypeTemperature"
,    MeterSubTypeVirtualBattery = "MeterSubTypeVirtualBattery"
}


export class DevicesBySubTypeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meterSubType" })
  meterSubType: DevicesBySubTypeGetMeterSubTypeEnum;
}


export class DevicesBySubTypeGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DevicesBySubTypeGetQueryParams;
}


export class DevicesBySubTypeGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Device })
  devices?: shared.Device[];

  @Metadata()
  statusCode: number;
}
