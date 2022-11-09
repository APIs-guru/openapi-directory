import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceCredentialsQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceCredentialsRequest extends SpeakeasyBase {
    queryParams: ListServiceCredentialsQueryParams;
}
export declare class ListServiceCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    serviceCredentialsCollection?: shared.ServiceCredentialsCollection;
    statusCode: number;
}
