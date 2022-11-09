import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VeteranStatusConfirmationVeteranStatusEnum {
    Confirmed = "confirmed"
,    NotConfirmed = "not confirmed"
}


// VeteranStatusConfirmation
/** 
 * Veteran status confirmation for an individual
**/
export class VeteranStatusConfirmation extends SpeakeasyBase {
  @Metadata({ data: "json, name=veteran_status" })
  veteranStatus?: VeteranStatusConfirmationVeteranStatusEnum;
}
