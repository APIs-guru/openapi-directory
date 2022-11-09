import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscribeToEventBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=encrypt" })
  encrypt?: boolean;

  @Metadata({ data: "json, name=publicationUrl" })
  publicationUrl: string;

  @Metadata({ data: "json, name=topics" })
  topics: string;
}
