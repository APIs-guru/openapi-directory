import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSourceServicePlansPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListSourceServicePlansQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListSourceServicePlansRequest extends SpeakeasyBase {
    pathParams: ListSourceServicePlansPathParams;
    queryParams: ListSourceServicePlansQueryParams;
}
export declare class ListSourceServicePlansResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    servicePlansCollection?: shared.ServicePlansCollection;
    statusCode: number;
}
