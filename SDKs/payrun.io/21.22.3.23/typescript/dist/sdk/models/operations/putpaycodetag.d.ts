import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutPayCodeTagPathParams extends SpeakeasyBase {
    employerId: string;
    payCodeId: string;
    tagId: string;
}
export declare class PutPayCodeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutPayCodeTagRequest extends SpeakeasyBase {
    pathParams: PutPayCodeTagPathParams;
    headers: PutPayCodeTagHeaders;
}
export declare class PutPayCodeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
