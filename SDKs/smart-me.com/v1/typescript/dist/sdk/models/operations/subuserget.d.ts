import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubUserGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SubUserGetRequest extends SpeakeasyBase {
    pathParams: SubUserGetPathParams;
}
export declare class SubUserGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subUserData?: shared.SubUserData;
}
