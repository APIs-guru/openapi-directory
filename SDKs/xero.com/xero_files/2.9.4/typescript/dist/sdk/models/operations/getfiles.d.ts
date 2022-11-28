import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFilesSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUtc = "CreatedDateUTC"
}
export declare class GetFilesQueryParams extends SpeakeasyBase {
    page?: number;
    pagesize?: number;
    sort?: GetFilesSortEnum;
}
export declare class GetFilesHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFilesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFilesRequest extends SpeakeasyBase {
    queryParams: GetFilesQueryParams;
    headers: GetFilesHeaders;
    security: GetFilesSecurity;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    contentType: string;
    files?: shared.Files;
    statusCode: number;
}
