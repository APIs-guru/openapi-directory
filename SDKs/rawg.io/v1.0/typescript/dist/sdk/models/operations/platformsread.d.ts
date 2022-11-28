import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlatformsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PlatformsReadRequest extends SpeakeasyBase {
    pathParams: PlatformsReadPathParams;
}
export declare class PlatformsReadResponse extends SpeakeasyBase {
    contentType: string;
    platformSingle?: shared.PlatformSingle;
    statusCode: number;
}
