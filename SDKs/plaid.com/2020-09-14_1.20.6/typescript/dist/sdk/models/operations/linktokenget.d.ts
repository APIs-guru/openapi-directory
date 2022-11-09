import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LinkTokenGetRequest extends SpeakeasyBase {
    request: shared.LinkTokenGetRequest;
}
export declare class LinkTokenGetResponse extends SpeakeasyBase {
    contentType: string;
    linkTokenGetResponse?: Map<string, any>;
    statusCode: number;
}
