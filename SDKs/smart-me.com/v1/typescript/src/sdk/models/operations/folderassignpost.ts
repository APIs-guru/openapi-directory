import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FolderAssignPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: string;
}


export class FolderAssignPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FolderAssignPostQueryParams;
}


export class FolderAssignPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
