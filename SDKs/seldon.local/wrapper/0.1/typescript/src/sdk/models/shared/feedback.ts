import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeldonMessage } from "./seldonmessage";



export class Feedback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: SeldonMessage;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: SeldonMessage;

  @SpeakeasyMetadata({ data: "json, name=reward" })
  reward?: number;

  @SpeakeasyMetadata({ data: "json, name=truth" })
  truth?: SeldonMessage;
}
