import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileWatcherStart200ApplicationJsonActionEnum {
    FileWatcherStart = "fileWatcherStart"
}

export enum FileWatcherStart200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class FileWatcherStart200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: FileWatcherStart200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: FileWatcherStart200ApplicationJsonResultEnum;
}


export class FileWatcherStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fileWatcherStart200ApplicationJsonObject?: FileWatcherStart200ApplicationJson;
}
