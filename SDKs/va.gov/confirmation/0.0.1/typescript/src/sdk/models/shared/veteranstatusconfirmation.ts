import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VeteranStatusConfirmationVeteranStatusEnum {
    Confirmed = "confirmed",
    NotConfirmed = "not confirmed"
}


// VeteranStatusConfirmation
/** 
 * Veteran status confirmation for an individual
**/
export class VeteranStatusConfirmation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=veteran_status" })
  veteranStatus?: VeteranStatusConfirmationVeteranStatusEnum;
}
