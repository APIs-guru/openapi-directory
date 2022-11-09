import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeldonMessage } from "./seldonmessage";
import { SeldonMessage } from "./seldonmessage";
import { SeldonMessage } from "./seldonmessage";


export class Feedback extends SpeakeasyBase {
  @Metadata({ data: "json, name=request" })
  request?: SeldonMessage;

  @Metadata({ data: "json, name=response" })
  response?: SeldonMessage;

  @Metadata({ data: "json, name=reward" })
  reward?: number;

  @Metadata({ data: "json, name=truth" })
  truth?: SeldonMessage;
}
