import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PicoChargingHistoryData
/** 
 * Api container for the charging station history
**/
export class PicoChargingHistoryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=EnergyUsed" })
  energyUsed?: number;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
