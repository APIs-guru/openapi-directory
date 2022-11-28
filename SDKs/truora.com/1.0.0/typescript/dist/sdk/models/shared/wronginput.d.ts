import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WrongInputInputEnum {
    DocumentExpeditionDate = "document_expedition_date"
}
/**
 * Represents a parameter entered during the background check creation that does not match the information obtained
**/
export declare class WrongInput extends SpeakeasyBase {
    input?: WrongInputInputEnum;
}
