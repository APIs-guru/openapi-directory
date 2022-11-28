import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueueInformation200ApplicationJsonActionEnum {
    QueueInformation = "queueInformation"
}


// QueueInformation200ApplicationJsonData
/** 
 * Information about the service
**/
export class QueueInformation200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queueMaxSize" })
  queueMaxSize: number;

  @SpeakeasyMetadata({ data: "json, name=queueSaturated" })
  queueSaturated: boolean;
}

export enum QueueInformation200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class QueueInformation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: QueueInformation200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: QueueInformation200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: QueueInformation200ApplicationJsonResultEnum;
}


export class QueueInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queueInformation200ApplicationJsonObject?: QueueInformation200ApplicationJson;
}
