import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubmitPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=content" })
  content?: string;

  @Metadata({ data: "multipart_form, name=expires_in" })
  expiresIn?: string;

  @Metadata({ data: "multipart_form, name=fair_offer" })
  fairOffer?: number;

  @Metadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "multipart_form, name=latitude" })
  latitude?: number;

  @Metadata({ data: "multipart_form, name=location" })
  location: string;

  @Metadata({ data: "multipart_form, name=longitude" })
  longitude?: number;

  @Metadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;

  @Metadata({ data: "multipart_form, name=preferences" })
  preferences?: string;

  @Metadata({ data: "multipart_form, name=session" })
  session: string;

  @Metadata({ data: "multipart_form, name=title" })
  title: string;

  @Metadata({ data: "multipart_form, name=type" })
  type: string;
}


export class SubmitPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: SubmitPostRequestBody;
}


export class SubmitPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=preference_key" })
  preferenceKey?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=session" })
  session?: Map<string, string>;
}


export class SubmitPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitPost200ApplicationJsonObject?: SubmitPost200ApplicationJson;
}
