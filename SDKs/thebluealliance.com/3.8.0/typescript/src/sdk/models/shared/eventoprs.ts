import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventOpRs
/** 
 * OPR, DPR, and CCWM for teams at the event.
**/
export class EventOpRs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ccwms" })
  ccwms?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=dprs" })
  dprs?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=oprs" })
  oprs?: Map<string, number>;
}
