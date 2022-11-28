import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
export declare class ContactUploadResponseData extends SpeakeasyBase {
    contacts?: Contact[];
    errors?: Contact[];
    inserted?: number;
    submitted?: number;
    success?: number;
    updated?: number;
}
export declare class ContactUploadResponse extends SpeakeasyBase {
    data?: ContactUploadResponseData;
    success?: boolean;
}
