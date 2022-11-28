import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiCustomDeviceIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetApiCustomDeviceIdRequest extends SpeakeasyBase {
    pathParams: GetApiCustomDeviceIdPathParams;
}
export declare class GetApiCustomDeviceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customDeviceToPost?: shared.CustomDeviceToPost;
    statusCode: number;
}
