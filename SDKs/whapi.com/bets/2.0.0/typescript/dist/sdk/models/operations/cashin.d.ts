import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashinPathParams extends SpeakeasyBase {
    betId: string;
}
export declare class CashinQueryParams extends SpeakeasyBase {
    cashInValue: number;
    cashinBetDelayId: string;
}
export declare class CashinHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    apiTicket: string;
}
export declare class CashinRequest extends SpeakeasyBase {
    pathParams: CashinPathParams;
    queryParams: CashinQueryParams;
    headers: CashinHeaders;
}
export declare class CashinResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cashInResponse?: shared.CashInResponse;
    errors?: shared.Errors;
}
