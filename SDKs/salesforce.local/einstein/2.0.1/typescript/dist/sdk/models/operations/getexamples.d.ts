import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExamplesPathParams extends SpeakeasyBase {
    datasetId: string;
}
export declare enum GetExamplesSourceEnum {
    All = "all",
    Feedback = "feedback",
    Upload = "upload"
}
export declare class GetExamplesQueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
    source?: GetExamplesSourceEnum;
}
export declare class GetExamplesSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetExamplesRequest extends SpeakeasyBase {
    pathParams: GetExamplesPathParams;
    queryParams: GetExamplesQueryParams;
    security: GetExamplesSecurity;
}
export declare class GetExamplesResponse extends SpeakeasyBase {
    contentType: string;
    exampleList?: shared.ExampleList;
    statusCode: number;
}
