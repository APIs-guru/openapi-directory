import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VirtualTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}


// VirtualTariff
/** 
 * Container class for the virtual tariffs
**/
export class VirtualTariff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Factor" })
  factor?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: VirtualTariffTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
