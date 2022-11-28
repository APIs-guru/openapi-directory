import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCisLineTagPathParams extends SpeakeasyBase {
    cisLineId: string;
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class PutCisLineTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutCisLineTagRequest extends SpeakeasyBase {
    pathParams: PutCisLineTagPathParams;
    headers: PutCisLineTagHeaders;
}
export declare class PutCisLineTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
