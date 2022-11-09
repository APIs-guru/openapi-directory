import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListArchivesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;
}


export class ListArchivesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListArchivesPathParams;
}

export enum ListArchives200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull"
,    ArchiveGroups = "archiveGroups"
,    ArchiveRules = "archiveRules"
,    ArchiveDirectives = "archiveDirectives"
,    ArchiveParameters = "archiveParameters"
}


export class ListArchives200ApplicationJsonDataFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=commiter" })
  commiter: string;

  @Metadata({ data: "json, name=gitCommit" })
  gitCommit: string;

  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ListArchives200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=full", elemType: operations.ListArchives200ApplicationJsonDataFull })
  full: ListArchives200ApplicationJsonDataFull[];
}

export enum ListArchives200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ListArchives200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ListArchives200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ListArchives200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ListArchives200ApplicationJsonResultEnum;
}


export class ListArchivesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listArchives200ApplicationJsonObject?: ListArchives200ApplicationJson;
}
