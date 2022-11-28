import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPrepaidBalanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidBalanceInfo?: shared.PrepaidBalanceInfo;
    statusCode: number;
}
