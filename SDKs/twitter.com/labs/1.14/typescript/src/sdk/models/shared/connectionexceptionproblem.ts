import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectionExceptionProblemConnectionIssueEnum {
    TooManyConnections = "TooManyConnections"
,    ProvisioningSubscription = "ProvisioningSubscription"
}


// ConnectionExceptionProblem
/** 
 * A problem that indicates something is wrong with the connection
**/
export class ConnectionExceptionProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_issue" })
  connectionIssue?: ConnectionExceptionProblemConnectionIssueEnum;

  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
