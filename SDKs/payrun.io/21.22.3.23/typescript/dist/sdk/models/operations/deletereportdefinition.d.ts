import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReportDefinitionPathParams extends SpeakeasyBase {
    reportDefinitionId: string;
}
export declare class DeleteReportDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class DeleteReportDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteReportDefinitionPathParams;
    headers: DeleteReportDefinitionHeaders;
}
export declare class DeleteReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
