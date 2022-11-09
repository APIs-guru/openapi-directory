import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FolderData
/** 
 * Container class for the folder API
**/
export class FolderData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElectricityCounterValue" })
  electricityCounterValue?: number;

  @Metadata({ data: "json, name=ElectricityPower" })
  electricityPower?: number;

  @Metadata({ data: "json, name=GasCounterValue" })
  gasCounterValue?: number;

  @Metadata({ data: "json, name=GasFlowRate" })
  gasFlowRate?: number;

  @Metadata({ data: "json, name=HeatCounterValue" })
  heatCounterValue?: number;

  @Metadata({ data: "json, name=HeatPower" })
  heatPower?: number;

  @Metadata({ data: "json, name=WaterCounterValue" })
  waterCounterValue?: number;

  @Metadata({ data: "json, name=WaterFlowRate" })
  waterFlowRate?: number;
}
