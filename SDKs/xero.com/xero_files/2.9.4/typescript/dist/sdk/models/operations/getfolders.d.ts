import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFoldersSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUtc = "CreatedDateUTC"
}
export declare class GetFoldersQueryParams extends SpeakeasyBase {
    sort?: GetFoldersSortEnum;
}
export declare class GetFoldersHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetFoldersSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetFoldersRequest extends SpeakeasyBase {
    queryParams: GetFoldersQueryParams;
    headers: GetFoldersHeaders;
    security: GetFoldersSecurity;
}
export declare class GetFoldersResponse extends SpeakeasyBase {
    contentType: string;
    folders?: any[];
    statusCode: number;
}
