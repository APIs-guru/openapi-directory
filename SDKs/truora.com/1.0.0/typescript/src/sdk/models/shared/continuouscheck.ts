import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContinuousCheckEntry } from "./continuouscheckentry";
import { Check } from "./check";

export enum ContinuousCheckContinuousCheckStatusEnum {
    New = "new"
,    Up = "up"
,    Down = "down"
,    Same = "same"
}


// ContinuousCheck
/** 
 * Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
**/
export class ContinuousCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContinuousCheckID" })
  continuousCheckId?: string;

  @Metadata({ data: "json, name=ContinuousCheckStatus" })
  continuousCheckStatus: ContinuousCheckContinuousCheckStatusEnum;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=History" })
  history?: ContinuousCheckEntry;

  @Metadata({ data: "json, name=LastCheckID" })
  lastCheckId: string;

  @Metadata({ data: "json, name=NextRunDate" })
  nextRunDate?: Date;

  @Metadata({ data: "json, name=OriginalCheck" })
  originalCheck?: Check;

  @Metadata({ data: "json, name=UpdateDate" })
  updateDate?: Date;
}
