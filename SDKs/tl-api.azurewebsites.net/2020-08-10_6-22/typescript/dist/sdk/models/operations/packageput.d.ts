import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagePutRequest extends SpeakeasyBase {
    request: shared.PackageDto;
}
export declare class PackagePutResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;
    statusCode: number;
}
