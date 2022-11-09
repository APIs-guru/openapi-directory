import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The third party job instructions' employer
**/
export declare class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class ThirdPartyJobInstructionThirdPartyJobInstruction extends SpeakeasyBase {
    clientIdUniqueKey?: string;
    clientSecretUniqueKey?: string;
    employer?: ThirdPartyJobInstructionThirdPartyJobInstructionEmployer;
    holdingDate?: Date;
    instructionTypeName?: string;
    payScheduleUniqueKey?: string;
    paymentDate?: Date;
    remoteEndpoint?: string;
}
export declare class ThirdPartyJobInstruction extends SpeakeasyBase {
    thirdPartyJobInstruction?: ThirdPartyJobInstructionThirdPartyJobInstruction;
}
