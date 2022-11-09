import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubContractorsWithTagPathParams extends SpeakeasyBase {
    employerId: string;
    tagId: string;
}
export declare class GetSubContractorsWithTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSubContractorsWithTagRequest extends SpeakeasyBase {
    pathParams: GetSubContractorsWithTagPathParams;
    headers: GetSubContractorsWithTagHeaders;
}
export declare class GetSubContractorsWithTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
