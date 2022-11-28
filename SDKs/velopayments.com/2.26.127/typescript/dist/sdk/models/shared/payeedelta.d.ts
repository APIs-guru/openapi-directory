import { SpeakeasyBase } from "../../../internal/utils";
import { OnboardedStatus2Enum } from "./onboardedstatus2enum";
export declare class PayeeDelta extends SpeakeasyBase {
    dbaName?: string;
    displayName?: string;
    email?: string;
    onboardedStatus?: OnboardedStatus2Enum;
    payeeCountry?: string;
    payeeId: string;
    remoteId: string;
}
