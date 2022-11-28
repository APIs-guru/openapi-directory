import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FolderData
/** 
 * Container class for the folder API
**/
export class FolderData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElectricityCounterValue" })
  electricityCounterValue?: number;

  @SpeakeasyMetadata({ data: "json, name=ElectricityPower" })
  electricityPower?: number;

  @SpeakeasyMetadata({ data: "json, name=GasCounterValue" })
  gasCounterValue?: number;

  @SpeakeasyMetadata({ data: "json, name=GasFlowRate" })
  gasFlowRate?: number;

  @SpeakeasyMetadata({ data: "json, name=HeatCounterValue" })
  heatCounterValue?: number;

  @SpeakeasyMetadata({ data: "json, name=HeatPower" })
  heatPower?: number;

  @SpeakeasyMetadata({ data: "json, name=WaterCounterValue" })
  waterCounterValue?: number;

  @SpeakeasyMetadata({ data: "json, name=WaterFlowRate" })
  waterFlowRate?: number;
}
