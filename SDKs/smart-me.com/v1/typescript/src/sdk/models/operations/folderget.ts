import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FolderGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FolderGetPathParams;
}


export class FolderGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  folderData?: shared.FolderData;

  @Metadata()
  statusCode: number;
}
