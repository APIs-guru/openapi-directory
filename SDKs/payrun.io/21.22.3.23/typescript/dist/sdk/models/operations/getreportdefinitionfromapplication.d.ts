import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportDefinitionFromApplicationPathParams extends SpeakeasyBase {
    reportDefinitionId: string;
}
export declare class GetReportDefinitionFromApplicationHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportDefinitionFromApplicationRequest extends SpeakeasyBase {
    pathParams: GetReportDefinitionFromApplicationPathParams;
    headers: GetReportDefinitionFromApplicationHeaders;
}
export declare class GetReportDefinitionFromApplicationResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    reportDefinition?: shared.ReportDefinition;
    statusCode: number;
}
