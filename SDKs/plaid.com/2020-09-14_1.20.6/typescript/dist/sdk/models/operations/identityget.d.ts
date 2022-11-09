import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdentityGetRequest extends SpeakeasyBase {
    request: shared.IdentityGetRequest;
}
export declare class IdentityGetResponse extends SpeakeasyBase {
    contentType: string;
    identityGetResponse?: Map<string, any>;
    statusCode: number;
}
