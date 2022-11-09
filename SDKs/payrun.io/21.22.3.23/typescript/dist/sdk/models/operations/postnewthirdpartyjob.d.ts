import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostNewThirdPartyJobHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewThirdPartyJobRequest extends SpeakeasyBase {
    headers: PostNewThirdPartyJobHeaders;
    request: shared.ThirdPartyJobInstruction;
}
export declare class PostNewThirdPartyJobResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
