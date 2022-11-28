import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAdminRecordingsStatus200ApplicationJsonStatusEnum {
    NeverStarted = "NeverStarted",
    Recording = "Recording",
    Stopped = "Stopped"
}
export declare class GetAdminRecordingsStatus200ApplicationJson extends SpeakeasyBase {
    status?: GetAdminRecordingsStatus200ApplicationJsonStatusEnum;
}
export declare class GetAdminRecordingsStatusResponse extends SpeakeasyBase {
    contentType: string;
    getAdminRecordingsStatus200ApplicationJsonObject?: GetAdminRecordingsStatus200ApplicationJson;
    statusCode: number;
}
