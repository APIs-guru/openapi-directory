import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PicoSettingsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PicoSettingsGetRequest extends SpeakeasyBase {
    pathParams: PicoSettingsGetPathParams;
}
export declare class PicoSettingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    picoSettingsDto?: shared.PicoSettingsDto;
    statusCode: number;
}
