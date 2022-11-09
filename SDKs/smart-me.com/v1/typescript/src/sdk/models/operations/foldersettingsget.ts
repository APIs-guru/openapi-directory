import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FolderSettingsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FolderSettingsGetPathParams;
}


export class FolderSettingsGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folderSettings?: shared.FolderSettings;

  @Metadata()
  statusCode: number;
}
