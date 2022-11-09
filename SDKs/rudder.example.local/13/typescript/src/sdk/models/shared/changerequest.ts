import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangeRequestChangesRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;
}


export class ChangeRequestChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.ChangeRequestChangesRules })
  rules?: ChangeRequestChangesRules[];
}

export enum ChangeRequestStatusEnum {
    Deployed = "Deployed"
,    PendingDeployment = "Pending deployment"
,    Cancelled = "Cancelled"
,    PendingValidation = "Pending validation"
,    Open = "Open"
}


// ChangeRequest
/** 
 * Content of the change request
**/
export class ChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptable" })
  acceptable?: boolean;

  @Metadata({ data: "json, name=changes" })
  changes?: ChangeRequestChanges;

  @Metadata({ data: "json, name=created by" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ChangeRequestStatusEnum;
}
