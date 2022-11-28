import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCisLineTypeTagPathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
    tagId: string;
}
export declare class PutCisLineTypeTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutCisLineTypeTagRequest extends SpeakeasyBase {
    pathParams: PutCisLineTypeTagPathParams;
    headers: PutCisLineTypeTagHeaders;
}
export declare class PutCisLineTypeTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
