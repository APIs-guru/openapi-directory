import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayorLinksQueryParams extends SpeakeasyBase {
    descendantsOfPayor?: string;
    fields?: string;
    parentOfPayor?: string;
}
export declare class PayorLinksRequest extends SpeakeasyBase {
    queryParams: PayorLinksQueryParams;
}
export declare class PayorLinksResponse extends SpeakeasyBase {
    contentType: string;
    payorLinksResponse?: shared.PayorLinksResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
