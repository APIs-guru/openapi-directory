import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransformInputRequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class TransformInputRequest extends SpeakeasyBase {
    request: TransformInputRequestBody;
}
export declare class TransformInputResponse extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
