import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class GetChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelPathParams;
}


export class GetChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  channel?: shared.Channel;
}
