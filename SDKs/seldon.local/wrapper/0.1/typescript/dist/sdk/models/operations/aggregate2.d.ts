import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Aggregate2RequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessageList;
}
export declare class Aggregate2Request extends SpeakeasyBase {
    request: Aggregate2RequestBody;
}
export declare class Aggregate2Response extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
