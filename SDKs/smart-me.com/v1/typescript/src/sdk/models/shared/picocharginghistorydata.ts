import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PicoChargingHistoryData
/** 
 * Api container for the charging station history
**/
export class PicoChargingHistoryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=EnergyUsed" })
  energyUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
