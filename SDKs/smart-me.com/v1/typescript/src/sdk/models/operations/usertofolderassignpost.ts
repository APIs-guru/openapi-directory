import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserToFolderAssignPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oldFolder" })
  oldFolder: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class UserToFolderAssignPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserToFolderAssignPostQueryParams;
}


export class UserToFolderAssignPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
