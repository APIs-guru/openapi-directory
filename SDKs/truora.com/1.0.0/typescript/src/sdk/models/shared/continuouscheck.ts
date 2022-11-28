import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinuousCheckEntry } from "./continuouscheckentry";
import { Check } from "./check";


export enum ContinuousCheckContinuousCheckStatusEnum {
    New = "new",
    Up = "up",
    Down = "down",
    Same = "same"
}


// ContinuousCheck
/** 
 * Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
**/
export class ContinuousCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContinuousCheckID" })
  continuousCheckId?: string;

  @SpeakeasyMetadata({ data: "json, name=ContinuousCheckStatus" })
  continuousCheckStatus: ContinuousCheckContinuousCheckStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=History" })
  history?: ContinuousCheckEntry;

  @SpeakeasyMetadata({ data: "json, name=LastCheckID" })
  lastCheckId: string;

  @SpeakeasyMetadata({ data: "json, name=NextRunDate" })
  nextRunDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=OriginalCheck" })
  originalCheck?: Check;

  @SpeakeasyMetadata({ data: "json, name=UpdateDate" })
  updateDate?: Date;
}
