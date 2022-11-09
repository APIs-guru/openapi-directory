import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiscoveredParticipantCodeEnum {
    Ok = "OK"
,    Nok = "NOK"
}


// DiscoveredParticipant
/** 
 * A public identifier for this customer.
**/
export class DiscoveredParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: DiscoveredParticipantCodeEnum;

  @Metadata({ data: "json, name=email" })
  email?: boolean;
}
