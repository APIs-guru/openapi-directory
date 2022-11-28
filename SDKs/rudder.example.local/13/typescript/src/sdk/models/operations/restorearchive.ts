import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RestoreArchiveArchiveRestoreKindEnum {
    LatestArchive = "latestArchive",
    LatestCommit = "latestCommit",
    ArchiveId = "archive ID"
}


export class RestoreArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveRestoreKind" })
  archiveRestoreKind: RestoreArchiveArchiveRestoreKindEnum;
}

export enum RestoreArchive200ApplicationJsonActionEnum {
    RestoreFullLatestArchive = "restoreFullLatestArchive",
    RestoreGroupLatestArchive = "restoreGroupLatestArchive",
    RestoreRulesLatestArchive = "restoreRulesLatestArchive",
    RestoreDirectivesLatestArchive = "restoreDirectivesLatestArchive",
    RestoreParametersLatestArchive = "restoreParametersLatestArchive",
    RestoreFullLatestCommit = "restoreFullLatestCommit",
    RestoreGroupLatestCommit = "restoreGroupLatestCommit",
    RestoreRulesLatestCommit = "restoreRulesLatestCommit",
    RestoreDirectivesLatestCommit = "restoreDirectivesLatestCommit",
    RestoreParametersLatestCommit = "restoreParametersLatestCommit",
    ArchiveFullDateRestore = "archiveFullDateRestore",
    ArchiveGroupDateRestore = "archiveGroupDateRestore",
    ArchiveRulesDateRestore = "archiveRulesDateRestore",
    ArchiveDirectivesDateRestore = "archiveDirectivesDateRestore",
    ArchiveParametersDateRestore = "archiveParametersDateRestore"
}


export class RestoreArchive200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directive" })
  directive?: string;

  @SpeakeasyMetadata({ data: "json, name=full" })
  full?: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: string;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: string;
}

export enum RestoreArchive200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class RestoreArchive200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: RestoreArchive200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: RestoreArchive200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: RestoreArchive200ApplicationJsonResultEnum;
}


export class RestoreArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RestoreArchivePathParams;
}


export class RestoreArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  restoreArchive200ApplicationJsonObject?: RestoreArchive200ApplicationJson;
}
