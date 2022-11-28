import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RouteRequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class RouteRequest extends SpeakeasyBase {
    request: RouteRequestBody;
}
export declare class RouteResponse extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
