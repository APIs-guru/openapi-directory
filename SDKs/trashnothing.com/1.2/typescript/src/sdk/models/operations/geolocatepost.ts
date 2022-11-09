import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeolocatePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GeolocatePostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @Metadata({ data: "multipart_form, name=location" })
  location?: string;

  @Metadata({ data: "multipart_form, name=longitude" })
  longitude: number;
}


export class GeolocatePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeolocatePostPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: GeolocatePostRequestBody;
}


export class GeolocatePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
