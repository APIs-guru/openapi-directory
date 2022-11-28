import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectionExceptionProblemConnectionIssueEnum {
    TooManyConnections = "TooManyConnections",
    ProvisioningSubscription = "ProvisioningSubscription"
}


// ConnectionExceptionProblem
/** 
 * A problem that indicates something is wrong with the connection
**/
export class ConnectionExceptionProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_issue" })
  connectionIssue?: ConnectionExceptionProblemConnectionIssueEnum;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
