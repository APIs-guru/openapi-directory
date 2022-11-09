import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserToFolderAssignDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class UserToFolderAssignDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserToFolderAssignDeleteQueryParams;
}


export class UserToFolderAssignDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
