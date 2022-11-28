import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishEntitlementsHeaders extends SpeakeasyBase {
    tmpsCorrelationId: string;
}
export declare class PublishEntitlementsRequest extends SpeakeasyBase {
    headers: PublishEntitlementsHeaders;
    request: shared.Entitlement;
}
export declare class PublishEntitlementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
