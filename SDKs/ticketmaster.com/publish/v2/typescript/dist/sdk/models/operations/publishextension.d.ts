import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishExtensionHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishExtensionRequest extends SpeakeasyBase {
    headers: PublishExtensionHeaders;
    request: shared.ExtensionData;
}
export declare class PublishExtensionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
