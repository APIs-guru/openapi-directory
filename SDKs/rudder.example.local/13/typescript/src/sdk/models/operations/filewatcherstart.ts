import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileWatcherStart200ApplicationJsonActionEnum {
    FileWatcherStart = "fileWatcherStart"
}

export enum FileWatcherStart200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class FileWatcherStart200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: FileWatcherStart200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: FileWatcherStart200ApplicationJsonResultEnum;
}


export class FileWatcherStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  fileWatcherStart200ApplicationJsonObject?: FileWatcherStart200ApplicationJson;
}
