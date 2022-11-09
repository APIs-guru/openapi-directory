import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileWatcherRestart200ApplicationJsonActionEnum {
    FileWatcherRestart = "fileWatcherRestart"
}

export enum FileWatcherRestart200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class FileWatcherRestart200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: FileWatcherRestart200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: FileWatcherRestart200ApplicationJsonResultEnum;
}


export class FileWatcherRestartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fileWatcherRestart200ApplicationJsonObject?: FileWatcherRestart200ApplicationJson;
}
