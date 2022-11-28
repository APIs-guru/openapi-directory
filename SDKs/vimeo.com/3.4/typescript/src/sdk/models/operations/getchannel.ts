import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class GetChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelPathParams;
}


export class GetChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channel?: shared.Channel;
}
