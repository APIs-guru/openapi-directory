import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FolderGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FolderGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FolderGetPathParams;
}


export class FolderGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderData?: shared.FolderData;

  @SpeakeasyMetadata()
  statusCode: number;
}
