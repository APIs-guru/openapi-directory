import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GymGetPathParams extends SpeakeasyBase {
    gymId: number;
}
export declare class GymGetRequest extends SpeakeasyBase {
    pathParams: GymGetPathParams;
}
export declare class GymGetResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfGymDto?: shared.DefaultResponseDtoOfGymDto;
    statusCode: number;
}
