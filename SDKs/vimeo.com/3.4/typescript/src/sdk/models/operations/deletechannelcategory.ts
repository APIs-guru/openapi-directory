import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChannelCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;
}


export class DeleteChannelCategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteChannelCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChannelCategoryPathParams;

  @SpeakeasyMetadata()
  security: DeleteChannelCategorySecurity;
}


export class DeleteChannelCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
