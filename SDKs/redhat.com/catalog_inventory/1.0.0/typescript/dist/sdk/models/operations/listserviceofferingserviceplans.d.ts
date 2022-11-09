import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceOfferingServicePlansPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ListServiceOfferingServicePlansQueryParams extends SpeakeasyBase {
    filter?: Map<string, any>;
    limit?: number;
    offset?: number;
    sortBy?: Map<string, any>;
}
export declare class ListServiceOfferingServicePlansRequest extends SpeakeasyBase {
    pathParams: ListServiceOfferingServicePlansPathParams;
    queryParams: ListServiceOfferingServicePlansQueryParams;
}
export declare class ListServiceOfferingServicePlansResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    servicePlansCollection?: shared.ServicePlansCollection;
    statusCode: number;
}
