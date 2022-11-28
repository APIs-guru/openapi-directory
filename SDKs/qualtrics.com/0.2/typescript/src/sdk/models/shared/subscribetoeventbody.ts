import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscribeToEventBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encrypt" })
  encrypt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publicationUrl" })
  publicationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=topics" })
  topics: string;
}
