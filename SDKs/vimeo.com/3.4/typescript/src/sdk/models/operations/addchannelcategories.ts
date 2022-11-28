import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddChannelCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddChannelCategoriesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels: string[];
}


export class AddChannelCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddChannelCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddChannelCategoriesRequestBody;
}


export class AddChannelCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
