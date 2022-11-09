import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WrongInputInputEnum {
    DocumentExpeditionDate = "document_expedition_date"
}


// WrongInput
/** 
 * Represents a parameter entered during the background check creation that does not match the information obtained
**/
export class WrongInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input?: WrongInputInputEnum;
}
