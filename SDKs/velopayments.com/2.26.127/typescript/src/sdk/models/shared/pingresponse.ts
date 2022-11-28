import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
