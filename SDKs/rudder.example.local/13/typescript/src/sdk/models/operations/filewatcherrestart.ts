import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileWatcherRestart200ApplicationJsonActionEnum {
    FileWatcherRestart = "fileWatcherRestart"
}

export enum FileWatcherRestart200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class FileWatcherRestart200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: FileWatcherRestart200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: FileWatcherRestart200ApplicationJsonResultEnum;
}


export class FileWatcherRestartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  fileWatcherRestart200ApplicationJsonObject?: FileWatcherRestart200ApplicationJson;
}
