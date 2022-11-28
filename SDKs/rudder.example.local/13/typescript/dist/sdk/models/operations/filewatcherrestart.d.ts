import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileWatcherRestart200ApplicationJsonActionEnum {
    FileWatcherRestart = "fileWatcherRestart"
}
export declare enum FileWatcherRestart200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class FileWatcherRestart200ApplicationJson extends SpeakeasyBase {
    action: FileWatcherRestart200ApplicationJsonActionEnum;
    data: string;
    result: FileWatcherRestart200ApplicationJsonResultEnum;
}
export declare class FileWatcherRestartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fileWatcherRestart200ApplicationJsonObject?: FileWatcherRestart200ApplicationJson;
}
