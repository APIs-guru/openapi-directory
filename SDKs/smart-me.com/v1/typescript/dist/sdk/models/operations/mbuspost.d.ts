import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MBusPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    mBusData?: shared.MBusData;
    mBusData1?: shared.MBusData;
    mBusData2?: shared.MBusData;
    textXml: Uint8Array;
}
export declare class MBusPostRequest extends SpeakeasyBase {
    request: MBusPostRequests;
}
export declare class MBusPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    object?: Map<string, any>;
    statusCode: number;
}
