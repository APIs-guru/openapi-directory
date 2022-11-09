import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FolderSettingsPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  folderSettings?: shared.FolderSettings;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  folderSettings1?: shared.FolderSettings;

  @Metadata({ data: "request, media_type=text/json" })
  folderSettings2?: shared.FolderSettings;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class FolderSettingsPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FolderSettingsPostPathParams;

  @Metadata()
  request: FolderSettingsPostRequests;
}


export class FolderSettingsPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folderMenuItem?: shared.FolderMenuItem;

  @Metadata()
  statusCode: number;
}
