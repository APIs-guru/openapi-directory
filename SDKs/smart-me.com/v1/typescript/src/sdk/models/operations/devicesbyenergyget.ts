import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DevicesByEnergyGetMeterEnergyTypeEnum {
    MeterTypeUnknown = "MeterTypeUnknown"
,    MeterTypeElectricity = "MeterTypeElectricity"
,    MeterTypeWater = "MeterTypeWater"
,    MeterTypeGas = "MeterTypeGas"
,    MeterTypeHeat = "MeterTypeHeat"
,    MeterTypeHca = "MeterTypeHCA"
,    MeterTypeAllMeters = "MeterTypeAllMeters"
,    MeterTypeTemperature = "MeterTypeTemperature"
,    MeterTypeMBusGateway = "MeterTypeMBusGateway"
,    MeterTypeRs485Gateway = "MeterTypeRS485Gateway"
,    MeterTypeCustomDevice = "MeterTypeCustomDevice"
,    MeterTypeCompressedAir = "MeterTypeCompressedAir"
,    MeterTypeSolarLog = "MeterTypeSolarLog"
,    MeterTypeVirtualMeter = "MeterTypeVirtualMeter"
,    MeterTypeWmBusGateway = "MeterTypeWMBusGateway"
}


export class DevicesByEnergyGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=meterEnergyType" })
  meterEnergyType: DevicesByEnergyGetMeterEnergyTypeEnum;
}


export class DevicesByEnergyGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DevicesByEnergyGetQueryParams;
}


export class DevicesByEnergyGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Device })
  devices?: shared.Device[];

  @Metadata()
  statusCode: number;
}
