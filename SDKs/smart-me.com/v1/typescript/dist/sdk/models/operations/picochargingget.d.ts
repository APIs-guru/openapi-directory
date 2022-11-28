import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PicoChargingGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PicoChargingGetRequest extends SpeakeasyBase {
    pathParams: PicoChargingGetPathParams;
}
export declare class PicoChargingGetResponse extends SpeakeasyBase {
    contentType: string;
    picoChargingData?: shared.PicoChargingData;
    statusCode: number;
}
