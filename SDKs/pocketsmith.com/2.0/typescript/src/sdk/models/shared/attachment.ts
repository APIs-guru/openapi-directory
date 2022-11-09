import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentContentTypeMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class AttachmentVariants extends SpeakeasyBase {
  @Metadata({ data: "json, name=large_url" })
  largeUrl?: string;

  @Metadata({ data: "json, name=thumb_url" })
  thumbUrl?: string;
}


export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=content_type_meta" })
  contentTypeMeta?: AttachmentContentTypeMeta;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=file_name" })
  fileName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=original_url" })
  originalUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=variants" })
  variants?: AttachmentVariants;
}
