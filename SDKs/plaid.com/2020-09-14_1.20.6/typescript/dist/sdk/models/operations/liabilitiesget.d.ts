import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LiabilitiesGetRequest extends SpeakeasyBase {
    request: shared.LiabilitiesGetRequest;
}
export declare class LiabilitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    liabilitiesGetResponse?: Map<string, any>;
    statusCode: number;
}
