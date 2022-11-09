import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class GetChannelCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChannelCategoriesPathParams;
}


export class GetChannelCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
