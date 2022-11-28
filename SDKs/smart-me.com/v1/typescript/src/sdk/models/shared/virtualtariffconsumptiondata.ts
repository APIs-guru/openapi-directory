import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VirtualTariffConsumptionDataTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}


// VirtualTariffConsumptionData
/** 
 * Container class for the virtual tariff consumption
**/
export class VirtualTariffConsumptionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Consumption" })
  consumption?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=TariffType" })
  tariffType?: VirtualTariffConsumptionDataTariffTypeEnum;
}
