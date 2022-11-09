import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedDelay" })
  fixedDelay?: number;
}


export class PostAdminSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminSettingsRequestBody;
}


export class PostAdminSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
