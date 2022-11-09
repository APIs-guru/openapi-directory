import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserToFolderAssignPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=oldFolder" })
  oldFolder: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class UserToFolderAssignPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UserToFolderAssignPostQueryParams;
}


export class UserToFolderAssignPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
