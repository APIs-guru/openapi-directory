import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFreeBetsQueryParams extends SpeakeasyBase {
    exclude?: string[];
    fields?: string[];
    include?: string[];
}
export declare class GetFreeBetsHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    apiTicket: string;
}
export declare class GetFreeBetsRequest extends SpeakeasyBase {
    queryParams: GetFreeBetsQueryParams;
    headers: GetFreeBetsHeaders;
}
export declare class GetFreeBetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    freeBet?: shared.FreeBetDetail[];
}
