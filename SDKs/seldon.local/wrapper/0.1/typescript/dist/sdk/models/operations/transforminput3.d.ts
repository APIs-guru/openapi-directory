import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransformInput3RequestBody extends SpeakeasyBase {
    json?: shared.SeldonMessage;
}
export declare class TransformInput3Request extends SpeakeasyBase {
    request: TransformInput3RequestBody;
}
export declare class TransformInput3Response extends SpeakeasyBase {
    contentType: string;
    seldonMessage?: shared.SeldonMessage;
    statusCode: number;
}
