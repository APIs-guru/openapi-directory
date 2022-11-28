import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FolderSettingsPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  folderSettings?: shared.FolderSettings;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  folderSettings1?: shared.FolderSettings;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  folderSettings2?: shared.FolderSettings;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class FolderSettingsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FolderSettingsPostPathParams;

  @SpeakeasyMetadata()
  request: FolderSettingsPostRequests;
}


export class FolderSettingsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderMenuItem?: shared.FolderMenuItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
