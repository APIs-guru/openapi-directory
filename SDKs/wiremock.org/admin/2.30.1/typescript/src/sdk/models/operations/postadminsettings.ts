import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedDelay" })
  fixedDelay?: number;
}


export class PostAdminSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminSettingsRequestBody;
}


export class PostAdminSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
