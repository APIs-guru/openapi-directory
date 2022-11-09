import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutUserTagPathParams extends SpeakeasyBase {
    tagId: string;
    userId: string;
}
export declare class PutUserTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutUserTagRequest extends SpeakeasyBase {
    pathParams: PutUserTagPathParams;
    headers: PutUserTagHeaders;
}
export declare class PutUserTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
