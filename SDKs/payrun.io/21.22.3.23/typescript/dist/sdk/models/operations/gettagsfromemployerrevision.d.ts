import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromEmployerRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
}
export declare class GetTagsFromEmployerRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromEmployerRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagsFromEmployerRevisionPathParams;
    headers: GetTagsFromEmployerRevisionHeaders;
}
export declare class GetTagsFromEmployerRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
