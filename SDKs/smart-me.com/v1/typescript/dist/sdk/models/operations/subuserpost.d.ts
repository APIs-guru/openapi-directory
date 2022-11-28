import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubUserPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    subUserData?: shared.SubUserData;
    subUserData1?: shared.SubUserData;
    subUserData2?: shared.SubUserData;
    textXml: Uint8Array;
}
export declare class SubUserPostRequest extends SpeakeasyBase {
    request: SubUserPostRequests;
}
export declare class SubUserPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
