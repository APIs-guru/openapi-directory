import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdSynopsisPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdSynopsisRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdSynopsisPathParams;
}
export declare class GetApiLocationConstituencyIdSynopsisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    stringItem?: shared.StringItem;
}
