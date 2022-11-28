import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiscoveredParticipantCodeEnum {
    Ok = "OK",
    Nok = "NOK"
}
/**
 * A public identifier for this customer.
**/
export declare class DiscoveredParticipant extends SpeakeasyBase {
    code?: DiscoveredParticipantCodeEnum;
    email?: boolean;
}
