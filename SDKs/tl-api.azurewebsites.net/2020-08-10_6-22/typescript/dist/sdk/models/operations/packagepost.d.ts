import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagePostRequest extends SpeakeasyBase {
    request: shared.PackageDto;
}
export declare class PackagePostResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
