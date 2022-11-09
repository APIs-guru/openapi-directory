import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreArchiveArchiveRestoreKindEnum {
    LatestArchive = "latestArchive"
,    LatestCommit = "latestCommit"
,    ArchiveId = "archive ID"
}


export class RestoreArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=archiveRestoreKind" })
  archiveRestoreKind: RestoreArchiveArchiveRestoreKindEnum;
}


export class RestoreArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RestoreArchivePathParams;
}

export enum RestoreArchive200ApplicationJsonActionEnum {
    RestoreFullLatestArchive = "restoreFullLatestArchive"
,    RestoreGroupLatestArchive = "restoreGroupLatestArchive"
,    RestoreRulesLatestArchive = "restoreRulesLatestArchive"
,    RestoreDirectivesLatestArchive = "restoreDirectivesLatestArchive"
,    RestoreParametersLatestArchive = "restoreParametersLatestArchive"
,    RestoreFullLatestCommit = "restoreFullLatestCommit"
,    RestoreGroupLatestCommit = "restoreGroupLatestCommit"
,    RestoreRulesLatestCommit = "restoreRulesLatestCommit"
,    RestoreDirectivesLatestCommit = "restoreDirectivesLatestCommit"
,    RestoreParametersLatestCommit = "restoreParametersLatestCommit"
,    ArchiveFullDateRestore = "archiveFullDateRestore"
,    ArchiveGroupDateRestore = "archiveGroupDateRestore"
,    ArchiveRulesDateRestore = "archiveRulesDateRestore"
,    ArchiveDirectivesDateRestore = "archiveDirectivesDateRestore"
,    ArchiveParametersDateRestore = "archiveParametersDateRestore"
}


export class RestoreArchive200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=directive" })
  directive?: string;

  @Metadata({ data: "json, name=full" })
  full?: string;

  @Metadata({ data: "json, name=groups" })
  groups?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: string;

  @Metadata({ data: "json, name=rules" })
  rules?: string;
}

export enum RestoreArchive200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class RestoreArchive200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: RestoreArchive200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: RestoreArchive200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: RestoreArchive200ApplicationJsonResultEnum;
}


export class RestoreArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  restoreArchive200ApplicationJsonObject?: RestoreArchive200ApplicationJson;
}
