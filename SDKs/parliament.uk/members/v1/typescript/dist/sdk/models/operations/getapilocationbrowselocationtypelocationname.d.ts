import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationBrowseLocationTypeLocationNamePathParams extends SpeakeasyBase {
    locationName: string;
    locationType: number;
}
export declare class GetApiLocationBrowseLocationTypeLocationNameRequest extends SpeakeasyBase {
    pathParams: GetApiLocationBrowseLocationTypeLocationNamePathParams;
}
export declare class GetApiLocationBrowseLocationTypeLocationNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    locationItem?: shared.LocationItem;
    statusCode: number;
}
