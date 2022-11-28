import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileWatcherStop200ApplicationJsonActionEnum {
    FileWatcherStop = "fileWatcherStop"
}
export declare enum FileWatcherStop200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class FileWatcherStop200ApplicationJson extends SpeakeasyBase {
    action: FileWatcherStop200ApplicationJsonActionEnum;
    data: string;
    result: FileWatcherStop200ApplicationJsonResultEnum;
}
export declare class FileWatcherStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fileWatcherStop200ApplicationJsonObject?: FileWatcherStop200ApplicationJson;
}
