import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAnnouncementsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file?: string;
}


export class PostAnnouncements201ApplicationJsonAnnouncementUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PostAnnouncements201ApplicationJsonAnnouncement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=file_internal" })
  fileInternal?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=src_ip_address" })
  srcIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: PostAnnouncements201ApplicationJsonAnnouncementUrl;
}


export class PostAnnouncements201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement" })
  announcement?: PostAnnouncements201ApplicationJsonAnnouncement;
}


export class PostAnnouncements400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string[];
}


export class PostAnnouncements400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostAnnouncements400ApplicationJsonErrors })
  errors: PostAnnouncements400ApplicationJsonErrors[];
}


export class PostAnnouncements403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnouncementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostAnnouncementsRequestBody;
}


export class PostAnnouncementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAnnouncements201ApplicationJsonObject?: PostAnnouncements201ApplicationJson;

  @SpeakeasyMetadata()
  postAnnouncements400ApplicationJsonObject?: PostAnnouncements400ApplicationJson;

  @SpeakeasyMetadata()
  postAnnouncements403ApplicationJsonObject?: PostAnnouncements403ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
