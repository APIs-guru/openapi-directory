import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FolderMenuGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class FolderMenuGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FolderMenuGetQueryParams;
}


export class FolderMenuGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folderMenuConfiguration?: shared.FolderMenuConfiguration;

  @Metadata()
  statusCode: number;
}
