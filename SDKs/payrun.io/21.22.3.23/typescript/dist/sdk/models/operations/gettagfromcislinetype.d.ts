import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTagFromCisLineTypePathParams extends SpeakeasyBase {
    cisLineTypeId: string;
    employerId: string;
    tagId: string;
}
export declare class GetTagFromCisLineTypeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTagFromCisLineTypeRequest extends SpeakeasyBase {
    pathParams: GetTagFromCisLineTypePathParams;
    headers: GetTagFromCisLineTypeHeaders;
}
export declare class GetTagFromCisLineTypeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
