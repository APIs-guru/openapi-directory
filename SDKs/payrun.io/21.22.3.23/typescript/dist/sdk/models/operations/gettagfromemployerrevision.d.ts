import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagFromEmployerRevisionPathParams extends SpeakeasyBase {
    effectiveDate: Date;
    employerId: string;
    tagId: string;
}
export declare class GetTagFromEmployerRevisionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromEmployerRevisionRequest extends SpeakeasyBase {
    pathParams: GetTagFromEmployerRevisionPathParams;
    headers: GetTagFromEmployerRevisionHeaders;
}
export declare class GetTagFromEmployerRevisionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
