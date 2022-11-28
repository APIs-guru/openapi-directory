import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1LocationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    locationsResult?: shared.LocationsResult;
    statusCode: number;
}
