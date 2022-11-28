import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddTagsToChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddTagsToChannelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string[];
}


export class AddTagsToChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddTagsToChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTagsToChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.tag+json" })
  request: AddTagsToChannelRequestBody;

  @SpeakeasyMetadata()
  security: AddTagsToChannelSecurity;
}


export class AddTagsToChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
