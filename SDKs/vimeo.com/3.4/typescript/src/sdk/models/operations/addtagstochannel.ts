import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTagsToChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class AddTagsToChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string[];
}


export class AddTagsToChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddTagsToChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTagsToChannelPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.tag+json" })
  request: AddTagsToChannelRequestBody;

  @Metadata()
  security: AddTagsToChannelSecurity;
}


export class AddTagsToChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata({ elemType: shared.Tag })
  tags?: shared.Tag[];
}
