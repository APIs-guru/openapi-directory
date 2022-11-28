import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutEmployerTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class PutEmployerTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutEmployerTagRequest extends SpeakeasyBase {
    pathParams: PutEmployerTagPathParams;
    headers: PutEmployerTagHeaders;
}
export declare class PutEmployerTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
