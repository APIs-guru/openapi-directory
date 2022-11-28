import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserToFolderAssignPostQueryParams extends SpeakeasyBase {
    oldFolder: string;
    source: string;
    target: string;
}
export declare class UserToFolderAssignPostRequest extends SpeakeasyBase {
    queryParams: UserToFolderAssignPostQueryParams;
}
export declare class UserToFolderAssignPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
