import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FolderSettingsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FolderSettingsGetRequest extends SpeakeasyBase {
    pathParams: FolderSettingsGetPathParams;
}
export declare class FolderSettingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folderSettings?: shared.FolderSettings;
    statusCode: number;
}
