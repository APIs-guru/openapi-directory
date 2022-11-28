import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListArchivesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" })
  archiveKind: shared.ArchiveKindEnum;
}

export enum ListArchives200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull",
    ArchiveGroups = "archiveGroups",
    ArchiveRules = "archiveRules",
    ArchiveDirectives = "archiveDirectives",
    ArchiveParameters = "archiveParameters"
}


export class ListArchives200ApplicationJsonDataFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commiter" })
  commiter: string;

  @SpeakeasyMetadata({ data: "json, name=gitCommit" })
  gitCommit: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ListArchives200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full", elemType: ListArchives200ApplicationJsonDataFull })
  full: ListArchives200ApplicationJsonDataFull[];
}

export enum ListArchives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ListArchives200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ListArchives200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ListArchives200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ListArchives200ApplicationJsonResultEnum;
}


export class ListArchivesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListArchivesPathParams;
}


export class ListArchivesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listArchives200ApplicationJsonObject?: ListArchives200ApplicationJson;
}
