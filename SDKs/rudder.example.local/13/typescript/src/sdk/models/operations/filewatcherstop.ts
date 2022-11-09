import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileWatcherStop200ApplicationJsonActionEnum {
    FileWatcherStop = "fileWatcherStop"
}

export enum FileWatcherStop200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class FileWatcherStop200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: FileWatcherStop200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: FileWatcherStop200ApplicationJsonResultEnum;
}


export class FileWatcherStopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fileWatcherStop200ApplicationJsonObject?: FileWatcherStop200ApplicationJson;
}
