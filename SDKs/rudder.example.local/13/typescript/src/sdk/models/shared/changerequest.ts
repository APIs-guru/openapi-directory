import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeRequestChangesRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;
}


export class ChangeRequestChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: ChangeRequestChangesRules })
  rules?: ChangeRequestChangesRules[];
}

export enum ChangeRequestStatusEnum {
    Deployed = "Deployed",
    PendingDeployment = "Pending deployment",
    Cancelled = "Cancelled",
    PendingValidation = "Pending validation",
    Open = "Open"
}


// ChangeRequest
/** 
 * Content of the change request
**/
export class ChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptable" })
  acceptable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=changes" })
  changes?: ChangeRequestChanges;

  @SpeakeasyMetadata({ data: "json, name=created by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChangeRequestStatusEnum;
}
