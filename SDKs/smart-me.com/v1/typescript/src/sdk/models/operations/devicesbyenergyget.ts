import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DevicesByEnergyGetMeterEnergyTypeEnum {
    MeterTypeUnknown = "MeterTypeUnknown",
    MeterTypeElectricity = "MeterTypeElectricity",
    MeterTypeWater = "MeterTypeWater",
    MeterTypeGas = "MeterTypeGas",
    MeterTypeHeat = "MeterTypeHeat",
    MeterTypeHca = "MeterTypeHCA",
    MeterTypeAllMeters = "MeterTypeAllMeters",
    MeterTypeTemperature = "MeterTypeTemperature",
    MeterTypeMBusGateway = "MeterTypeMBusGateway",
    MeterTypeRs485Gateway = "MeterTypeRS485Gateway",
    MeterTypeCustomDevice = "MeterTypeCustomDevice",
    MeterTypeCompressedAir = "MeterTypeCompressedAir",
    MeterTypeSolarLog = "MeterTypeSolarLog",
    MeterTypeVirtualMeter = "MeterTypeVirtualMeter",
    MeterTypeWmBusGateway = "MeterTypeWMBusGateway"
}


export class DevicesByEnergyGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meterEnergyType" })
  meterEnergyType: DevicesByEnergyGetMeterEnergyTypeEnum;
}


export class DevicesByEnergyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DevicesByEnergyGetQueryParams;
}


export class DevicesByEnergyGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Device })
  devices?: shared.Device[];

  @SpeakeasyMetadata()
  statusCode: number;
}
