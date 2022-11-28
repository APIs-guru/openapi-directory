import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLocationRequestBody extends SpeakeasyBase {
    latitude: number;
    longitude: number;
    name: string;
    radius: number;
}
export declare class UpdateLocationRequest extends SpeakeasyBase {
    request: UpdateLocationRequestBody;
}
export declare class UpdateLocationResponse extends SpeakeasyBase {
    contentType: string;
    currentUser?: shared.CurrentUser;
    statusCode: number;
}
