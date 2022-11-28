import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FolderSettingsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FolderSettingsDeletePathParams;
}


export class FolderSettingsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
