import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientWaitTime } from "./patientwaittime";



export class WaitTimes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=health", elemType: PatientWaitTime })
  health?: PatientWaitTime[];
}
