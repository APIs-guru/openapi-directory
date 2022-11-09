import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPayCodesFromNominalCodePathParams extends SpeakeasyBase {
    employerId: string;
    nominalCodeId: string;
}
export declare class GetPayCodesFromNominalCodeHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetPayCodesFromNominalCodeRequest extends SpeakeasyBase {
    pathParams: GetPayCodesFromNominalCodePathParams;
    headers: GetPayCodesFromNominalCodeHeaders;
}
export declare class GetPayCodesFromNominalCodeResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
