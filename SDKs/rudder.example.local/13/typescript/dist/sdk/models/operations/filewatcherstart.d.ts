import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileWatcherStart200ApplicationJsonActionEnum {
    FileWatcherStart = "fileWatcherStart"
}
export declare enum FileWatcherStart200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class FileWatcherStart200ApplicationJson extends SpeakeasyBase {
    action: FileWatcherStart200ApplicationJsonActionEnum;
    data: string;
    result: FileWatcherStart200ApplicationJsonResultEnum;
}
export declare class FileWatcherStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fileWatcherStart200ApplicationJsonObject?: FileWatcherStart200ApplicationJson;
}
