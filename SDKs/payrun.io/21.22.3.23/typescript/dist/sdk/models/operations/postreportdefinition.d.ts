import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReportDefinitionHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostReportDefinitionRequest extends SpeakeasyBase {
    headers: PostReportDefinitionHeaders;
    request: shared.ReportDefinition;
}
export declare class PostReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
