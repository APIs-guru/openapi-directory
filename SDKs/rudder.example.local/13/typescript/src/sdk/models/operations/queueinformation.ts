import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueueInformation200ApplicationJsonActionEnum {
    QueueInformation = "queueInformation"
}


// QueueInformation200ApplicationJsonData
/** 
 * Information about the service
**/
export class QueueInformation200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=queueMaxSize" })
  queueMaxSize: number;

  @Metadata({ data: "json, name=queueSaturated" })
  queueSaturated: boolean;
}

export enum QueueInformation200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class QueueInformation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: QueueInformation200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: QueueInformation200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: QueueInformation200ApplicationJsonResultEnum;
}


export class QueueInformationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  queueInformation200ApplicationJsonObject?: QueueInformation200ApplicationJson;
}
