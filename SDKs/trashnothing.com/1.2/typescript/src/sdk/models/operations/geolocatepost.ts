import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeolocatePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GeolocatePostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=longitude" })
  longitude: number;
}


export class GeolocatePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeolocatePostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: GeolocatePostRequestBody;
}


export class GeolocatePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  post?: shared.Post;

  @SpeakeasyMetadata()
  statusCode: number;
}
