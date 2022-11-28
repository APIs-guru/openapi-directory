import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployersWithTagPathParams extends SpeakeasyBase {
    tagId: string;
}
export declare class GetEmployersWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetEmployersWithTagRequest extends SpeakeasyBase {
    pathParams: GetEmployersWithTagPathParams;
    headers: GetEmployersWithTagHeaders;
}
export declare class GetEmployersWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
