import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FolderMenuGetQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class FolderMenuGetRequest extends SpeakeasyBase {
    queryParams: FolderMenuGetQueryParams;
}
export declare class FolderMenuGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folderMenuConfiguration?: shared.FolderMenuConfiguration;
    statusCode: number;
}
