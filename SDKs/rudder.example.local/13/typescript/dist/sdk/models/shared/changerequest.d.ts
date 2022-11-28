import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangeRequestChangesRules extends SpeakeasyBase {
    action?: string;
}
export declare class ChangeRequestChanges extends SpeakeasyBase {
    rules?: ChangeRequestChangesRules[];
}
export declare enum ChangeRequestStatusEnum {
    Deployed = "Deployed",
    PendingDeployment = "Pending deployment",
    Cancelled = "Cancelled",
    PendingValidation = "Pending validation",
    Open = "Open"
}
/**
 * Content of the change request
**/
export declare class ChangeRequest extends SpeakeasyBase {
    acceptable?: boolean;
    changes?: ChangeRequestChanges;
    createdBy?: string;
    description?: string;
    id?: number;
    name?: string;
    status?: ChangeRequestStatusEnum;
}
