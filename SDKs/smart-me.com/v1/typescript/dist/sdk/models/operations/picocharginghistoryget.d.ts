import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PicoChargingHistoryGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PicoChargingHistoryGetRequest extends SpeakeasyBase {
    pathParams: PicoChargingHistoryGetPathParams;
}
export declare class PicoChargingHistoryGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    picoChargingHistoryData?: shared.PicoChargingHistoryData[];
    statusCode: number;
}
