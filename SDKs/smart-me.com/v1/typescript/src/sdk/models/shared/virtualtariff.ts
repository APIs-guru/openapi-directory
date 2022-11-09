import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VirtualTariffTypeEnum {
    Battery = "Battery"
,    Solar = "Solar"
,    Normal = "Normal"
}


// VirtualTariff
/** 
 * Container class for the virtual tariffs
**/
export class VirtualTariff extends SpeakeasyBase {
  @Metadata({ data: "json, name=Factor" })
  factor?: number;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: VirtualTariffTypeEnum;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
