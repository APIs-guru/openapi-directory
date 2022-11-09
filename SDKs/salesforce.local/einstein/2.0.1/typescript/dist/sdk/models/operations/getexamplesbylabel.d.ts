import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetExamplesByLabelQueryParams extends SpeakeasyBase {
    count?: string;
    labelId?: string;
    offset?: string;
}
export declare class GetExamplesByLabelSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetExamplesByLabelRequest extends SpeakeasyBase {
    queryParams: GetExamplesByLabelQueryParams;
    security: GetExamplesByLabelSecurity;
}
export declare class GetExamplesByLabelResponse extends SpeakeasyBase {
    contentType: string;
    exampleList?: shared.ExampleList;
    statusCode: number;
}
