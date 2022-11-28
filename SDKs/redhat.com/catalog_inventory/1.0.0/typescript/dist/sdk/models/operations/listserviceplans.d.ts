import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServicePlansQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServicePlansRequest extends SpeakeasyBase {
    queryParams: ListServicePlansQueryParams;
}
export declare class ListServicePlansResponse extends SpeakeasyBase {
    contentType: string;
    servicePlansCollection?: shared.ServicePlansCollection;
    statusCode: number;
}
