import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueueInformation200ApplicationJsonActionEnum {
    QueueInformation = "queueInformation"
}
/**
 * Information about the service
**/
export declare class QueueInformation200ApplicationJsonData extends SpeakeasyBase {
    queueMaxSize: number;
    queueSaturated: boolean;
}
export declare enum QueueInformation200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class QueueInformation200ApplicationJson extends SpeakeasyBase {
    action: QueueInformation200ApplicationJsonActionEnum;
    data: QueueInformation200ApplicationJsonData;
    result: QueueInformation200ApplicationJsonResultEnum;
}
export declare class QueueInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    queueInformation200ApplicationJsonObject?: QueueInformation200ApplicationJson;
}
