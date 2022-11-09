import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FolderSettingsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderSettingsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FolderSettingsDeletePathParams;
}


export class FolderSettingsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
