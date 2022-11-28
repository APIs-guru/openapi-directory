import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FolderAssignPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class FolderAssignPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FolderAssignPostQueryParams;
}


export class FolderAssignPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
