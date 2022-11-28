import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsFromCisLineTypePathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
}
export declare class GetTagsFromCisLineTypeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagsFromCisLineTypeRequest extends SpeakeasyBase {
    pathParams: GetTagsFromCisLineTypePathParams;
    headers: GetTagsFromCisLineTypeHeaders;
}
export declare class GetTagsFromCisLineTypeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
