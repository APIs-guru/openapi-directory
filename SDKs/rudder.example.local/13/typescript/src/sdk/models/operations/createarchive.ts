import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;
}


export class CreateArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateArchivePathParams;
}

export enum CreateArchive200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull"
,    ArchiveGroups = "archiveGroups"
,    ArchiveRules = "archiveRules"
,    ArchiveDirectives = "archiveDirectives"
,    ArchiveParameters = "archiveParameters"
}


export class CreateArchive200ApplicationJsonDataFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=commiter" })
  commiter: string;

  @Metadata({ data: "json, name=gitCommit" })
  gitCommit: string;

  @Metadata({ data: "json, name=id" })
  id: string;
}


export class CreateArchive200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=full" })
  full: CreateArchive200ApplicationJsonDataFull;
}

export enum CreateArchive200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class CreateArchive200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: CreateArchive200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: CreateArchive200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: CreateArchive200ApplicationJsonResultEnum;
}


export class CreateArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createArchive200ApplicationJsonObject?: CreateArchive200ApplicationJson;
}
