import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSubContractorTagPathParams extends SpeakeasyBase {
    employerId: string;
    subContractorId: string;
    tagId: string;
}
export declare class PutSubContractorTagHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutSubContractorTagRequest extends SpeakeasyBase {
    pathParams: PutSubContractorTagPathParams;
    headers: PutSubContractorTagHeaders;
}
export declare class PutSubContractorTagResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    tag?: shared.Tag;
}
