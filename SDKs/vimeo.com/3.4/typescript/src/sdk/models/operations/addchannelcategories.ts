import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddChannelCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddChannelCategoriesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels" })
  channels: string[];
}


export class AddChannelCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddChannelCategoriesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddChannelCategoriesRequestBody;
}


export class AddChannelCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;
}
