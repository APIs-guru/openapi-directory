import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAoeLiabilityReportOuputQueryParams extends SpeakeasyBase {
    employerKey: string;
    payScheduleKey: string;
    taxPeriod?: string;
    taxYear: string;
    transformDefinitionKey?: string;
}
export declare class GetAoeLiabilityReportOuputHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetAoeLiabilityReportOuputRequest extends SpeakeasyBase {
    queryParams: GetAoeLiabilityReportOuputQueryParams;
    headers: GetAoeLiabilityReportOuputHeaders;
}
export declare class GetAoeLiabilityReportOuputResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getAoeLiabilityReportOuput200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
