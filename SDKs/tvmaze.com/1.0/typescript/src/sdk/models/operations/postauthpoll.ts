import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAuthPollRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthPollRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAuthPollRequestBody;
}


export class PostAuthPoll200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=apikey" })
  apikey?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class PostAuthPollResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAuthPoll200ApplicationJsonObject?: PostAuthPoll200ApplicationJson;

  @Metadata()
  statusCode: number;
}
