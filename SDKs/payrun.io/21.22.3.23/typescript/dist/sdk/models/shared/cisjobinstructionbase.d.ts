import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The cis job instruction bases' employer
**/
export declare class CisJobInstructionBaseCisJobInstructionBaseEmployer extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The cis job instruction bases' sub contractors
**/
export declare class CisJobInstructionBaseCisJobInstructionBaseSubContractor extends SpeakeasyBase {
    subContractor?: any[];
}
export declare class CisJobInstructionBaseCisJobInstructionBase extends SpeakeasyBase {
    employer?: CisJobInstructionBaseCisJobInstructionBaseEmployer;
    holdingDate?: Date;
    subContractors?: CisJobInstructionBaseCisJobInstructionBaseSubContractor;
}
export declare class CisJobInstructionBase extends SpeakeasyBase {
    cisJobInstructionBase?: CisJobInstructionBaseCisJobInstructionBase;
}
