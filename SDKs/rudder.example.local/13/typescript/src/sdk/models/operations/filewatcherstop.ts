import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileWatcherStop200ApplicationJsonActionEnum {
    FileWatcherStop = "fileWatcherStop"
}

export enum FileWatcherStop200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class FileWatcherStop200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: FileWatcherStop200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: FileWatcherStop200ApplicationJsonResultEnum;
}


export class FileWatcherStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  fileWatcherStop200ApplicationJsonObject?: FileWatcherStop200ApplicationJson;
}
