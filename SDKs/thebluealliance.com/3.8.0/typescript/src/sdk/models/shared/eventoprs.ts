import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventOpRs
/** 
 * OPR, DPR, and CCWM for teams at the event.
**/
export class EventOpRs extends SpeakeasyBase {
  @Metadata({ data: "json, name=ccwms" })
  ccwms?: Map<string, number>;

  @Metadata({ data: "json, name=dprs" })
  dprs?: Map<string, number>;

  @Metadata({ data: "json, name=oprs" })
  oprs?: Map<string, number>;
}
