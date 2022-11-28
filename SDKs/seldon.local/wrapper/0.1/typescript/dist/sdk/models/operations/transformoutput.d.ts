import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransformOutputRequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class TransformOutputRequest extends SpeakeasyBase {
    request: TransformOutputRequestBody;
}
export declare class TransformOutputResponse extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
