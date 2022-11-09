import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConnectionExceptionProblemConnectionIssueEnum {
    TooManyConnections = "TooManyConnections",
    ProvisioningSubscription = "ProvisioningSubscription"
}
/**
 * A problem that indicates something is wrong with the connection
**/
export declare class ConnectionExceptionProblem extends SpeakeasyBase {
    connectionIssue?: ConnectionExceptionProblemConnectionIssueEnum;
    detail: string;
    title: string;
    type: string;
}
