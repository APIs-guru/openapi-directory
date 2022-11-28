import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PicoLoadmanagementGroupGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PicoLoadmanagementGroupGetRequest extends SpeakeasyBase {
    pathParams: PicoLoadmanagementGroupGetPathParams;
}
export declare class PicoLoadmanagementGroupGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    picoLoadmanagementGroupDto?: shared.PicoLoadmanagementGroupDto;
    statusCode: number;
}
