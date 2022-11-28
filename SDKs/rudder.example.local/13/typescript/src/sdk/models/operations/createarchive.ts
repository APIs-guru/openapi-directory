import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;
}

export enum CreateArchive200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull",
    ArchiveGroups = "archiveGroups",
    ArchiveRules = "archiveRules",
    ArchiveDirectives = "archiveDirectives",
    ArchiveParameters = "archiveParameters"
}


export class CreateArchive200ApplicationJsonDataFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commiter" })
  commiter: string;

  @SpeakeasyMetadata({ data: "json, name=gitCommit" })
  gitCommit: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class CreateArchive200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full" })
  full: CreateArchive200ApplicationJsonDataFull;
}

export enum CreateArchive200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class CreateArchive200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: CreateArchive200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: CreateArchive200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: CreateArchive200ApplicationJsonResultEnum;
}


export class CreateArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateArchivePathParams;
}


export class CreateArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createArchive200ApplicationJsonObject?: CreateArchive200ApplicationJson;
}
