import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FolderMenuGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class FolderMenuGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FolderMenuGetQueryParams;
}


export class FolderMenuGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderMenuConfiguration?: shared.FolderMenuConfiguration;

  @SpeakeasyMetadata()
  statusCode: number;
}
