import { SpeakeasyBase } from "../../../internal/utils";
export declare class FolderAssignPostQueryParams extends SpeakeasyBase {
    source: string;
    target: string;
}
export declare class FolderAssignPostRequest extends SpeakeasyBase {
    queryParams: FolderAssignPostQueryParams;
}
export declare class FolderAssignPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
