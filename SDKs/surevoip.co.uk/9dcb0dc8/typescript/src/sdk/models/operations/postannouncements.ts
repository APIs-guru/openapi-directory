import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAnnouncementsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=description" })
  description?: string;

  @Metadata({ data: "multipart_form, name=file" })
  file?: string;
}


export class PostAnnouncementsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostAnnouncementsRequestBody;
}


export class PostAnnouncements201ApplicationJsonAnnouncementUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=download" })
  download?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PostAnnouncements201ApplicationJsonAnnouncement extends SpeakeasyBase {
  @Metadata({ data: "json, name=creation_date" })
  creationDate?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=file_internal" })
  fileInternal?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=src_ip_address" })
  srcIpAddress?: string;

  @Metadata({ data: "json, name=url" })
  url?: PostAnnouncements201ApplicationJsonAnnouncementUrl;
}


export class PostAnnouncements201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcement" })
  announcement?: PostAnnouncements201ApplicationJsonAnnouncement;
}


export class PostAnnouncements400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field: string;

  @Metadata({ data: "json, name=message" })
  message: string[];
}


export class PostAnnouncements400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: operations.PostAnnouncements400ApplicationJsonErrors })
  errors: PostAnnouncements400ApplicationJsonErrors[];
}


export class PostAnnouncements403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnouncementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAnnouncements201ApplicationJsonObject?: PostAnnouncements201ApplicationJson;

  @Metadata()
  postAnnouncements400ApplicationJsonObject?: PostAnnouncements400ApplicationJson;

  @Metadata()
  postAnnouncements403ApplicationJsonObject?: PostAnnouncements403ApplicationJson;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
