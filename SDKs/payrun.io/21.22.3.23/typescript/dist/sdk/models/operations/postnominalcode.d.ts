import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostNominalCodePathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostNominalCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNominalCodeRequest extends SpeakeasyBase {
    pathParams: PostNominalCodePathParams;
    headers: PostNominalCodeHeaders;
    request: shared.NominalCode;
}
export declare class PostNominalCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
