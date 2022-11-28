import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FolderSettingsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FolderSettingsGetPathParams;
}


export class FolderSettingsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderSettings?: shared.FolderSettings;

  @SpeakeasyMetadata()
  statusCode: number;
}
