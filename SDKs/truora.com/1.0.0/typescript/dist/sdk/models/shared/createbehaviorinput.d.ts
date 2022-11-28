import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents paramaters required to give behavior feedback
**/
export declare class CreateBehaviorInput extends SpeakeasyBase {
    birthDate: Date;
    country: any;
    documentId: string;
    documentType: any;
    email: string;
    feedbackDate: Date;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    reason: any;
}
