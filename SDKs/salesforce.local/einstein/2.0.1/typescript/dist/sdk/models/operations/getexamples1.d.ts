import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetExamples1PathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare enum GetExamples1SourceEnum {
    All = "all",
    Feedback = "feedback",
    Upload = "upload"
}
export declare class GetExamples1QueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
    source?: GetExamples1SourceEnum;
}
export declare class GetExamples1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetExamples1Request extends SpeakeasyBase {
    pathParams: GetExamples1PathParams;
    queryParams: GetExamples1QueryParams;
    security: GetExamples1Security;
}
export declare class GetExamples1Response extends SpeakeasyBase {
    contentType: string;
    exampleList?: shared.ExampleList;
    statusCode: number;
}
