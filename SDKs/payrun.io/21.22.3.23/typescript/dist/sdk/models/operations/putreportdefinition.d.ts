import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutReportDefinitionPathParams extends SpeakeasyBase {
    reportDefinitionId: string;
}
export declare class PutReportDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    pathParams: PutReportDefinitionPathParams;
    headers: PutReportDefinitionHeaders;
    request: shared.ReportDefinition;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    reportDefinition?: shared.ReportDefinition;
    statusCode: number;
}
