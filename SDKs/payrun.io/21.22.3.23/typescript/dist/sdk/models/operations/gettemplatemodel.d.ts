import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTemplateModelPathParams extends SpeakeasyBase {
    dtoDataType: string;
}
export declare class GetTemplateModelHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetTemplateModelRequest extends SpeakeasyBase {
    pathParams: GetTemplateModelPathParams;
    headers: GetTemplateModelHeaders;
}
export declare class GetTemplateModelResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getTemplateModel200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
