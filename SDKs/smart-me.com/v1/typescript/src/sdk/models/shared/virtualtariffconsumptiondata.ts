import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VirtualTariffConsumptionDataTariffTypeEnum {
    Battery = "Battery"
,    Solar = "Solar"
,    Normal = "Normal"
}


// VirtualTariffConsumptionData
/** 
 * Container class for the virtual tariff consumption
**/
export class VirtualTariffConsumptionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Consumption" })
  consumption?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Price" })
  price?: number;

  @Metadata({ data: "json, name=TariffType" })
  tariffType?: VirtualTariffConsumptionDataTariffTypeEnum;
}
