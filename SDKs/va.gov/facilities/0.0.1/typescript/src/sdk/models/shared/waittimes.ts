import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatientWaitTime } from "./patientwaittime";


export class WaitTimes extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective_date" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=health", elemType: shared.PatientWaitTime })
  health?: PatientWaitTime[];
}
