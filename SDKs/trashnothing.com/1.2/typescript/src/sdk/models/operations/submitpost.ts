import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmitPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=expires_in" })
  expiresIn?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=fair_offer" })
  fairOffer?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=preferences" })
  preferences?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=session" })
  session: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: string;
}


export class SubmitPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=preference_key" })
  preferenceKey?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: Map<string, string>;
}


export class SubmitPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: SubmitPostRequestBody;
}


export class SubmitPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitPost200ApplicationJsonObject?: SubmitPost200ApplicationJson;
}
