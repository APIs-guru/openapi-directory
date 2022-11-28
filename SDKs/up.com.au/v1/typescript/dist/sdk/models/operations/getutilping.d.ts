import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUtilPingResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    pingResponse?: shared.PingResponse;
    statusCode: number;
}
