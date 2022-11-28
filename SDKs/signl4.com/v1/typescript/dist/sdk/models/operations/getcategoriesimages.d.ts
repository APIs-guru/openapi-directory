import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    getCategoriesImages200ApplicationJsonStrings?: string[];
    getCategoriesImages200TextJsonStrings?: string[];
    statusCode: number;
}
