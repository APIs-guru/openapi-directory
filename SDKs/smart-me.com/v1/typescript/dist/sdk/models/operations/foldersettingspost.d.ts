import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FolderSettingsPostPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FolderSettingsPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    folderSettings?: shared.FolderSettings;
    folderSettings1?: shared.FolderSettings;
    folderSettings2?: shared.FolderSettings;
    textXml: Uint8Array;
}
export declare class FolderSettingsPostRequest extends SpeakeasyBase {
    pathParams: FolderSettingsPostPathParams;
    request: FolderSettingsPostRequests;
}
export declare class FolderSettingsPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folderMenuItem?: shared.FolderMenuItem;
    statusCode: number;
}
