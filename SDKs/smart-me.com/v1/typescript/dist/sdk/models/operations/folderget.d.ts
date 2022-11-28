import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FolderGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FolderGetRequest extends SpeakeasyBase {
    pathParams: FolderGetPathParams;
}
export declare class FolderGetResponse extends SpeakeasyBase {
    contentType: string;
    folderData?: shared.FolderData;
    statusCode: number;
}
