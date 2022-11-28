import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiscoveredParticipantCodeEnum {
    Ok = "OK",
    Nok = "NOK"
}


// DiscoveredParticipant
/** 
 * A public identifier for this customer.
**/
export class DiscoveredParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: DiscoveredParticipantCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: boolean;
}
