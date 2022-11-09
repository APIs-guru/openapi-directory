import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetReportDefinitionsFromApplicationHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetReportDefinitionsFromApplicationRequest extends SpeakeasyBase {
    headers: GetReportDefinitionsFromApplicationHeaders;
}
export declare class GetReportDefinitionsFromApplicationResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
