import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetExamplesByLabel1QueryParams extends SpeakeasyBase {
    count?: string;
    labelId?: string;
    offset?: string;
}
export declare class GetExamplesByLabel1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetExamplesByLabel1Request extends SpeakeasyBase {
    queryParams: GetExamplesByLabel1QueryParams;
    security: GetExamplesByLabel1Security;
}
export declare class GetExamplesByLabel1Response extends SpeakeasyBase {
    contentType: string;
    exampleList?: shared.ExampleList;
    statusCode: number;
}
