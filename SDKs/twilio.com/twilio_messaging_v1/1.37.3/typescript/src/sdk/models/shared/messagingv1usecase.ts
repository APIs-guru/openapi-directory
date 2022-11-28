import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1Usecase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usecases" })
  usecases?: any[];
}
