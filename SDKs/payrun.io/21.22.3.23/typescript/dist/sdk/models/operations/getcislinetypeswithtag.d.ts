import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCisLineTypesWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetCisLineTypesWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetCisLineTypesWithTagRequest extends SpeakeasyBase {
    pathParams: GetCisLineTypesWithTagPathParams;
    headers: GetCisLineTypesWithTagHeaders;
}
export declare class GetCisLineTypesWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
