import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserToFolderAssignDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class UserToFolderAssignDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UserToFolderAssignDeleteQueryParams;
}


export class UserToFolderAssignDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
