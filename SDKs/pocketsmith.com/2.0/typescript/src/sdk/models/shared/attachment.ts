import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachmentContentTypeMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class AttachmentVariants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=large_url" })
  largeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_url" })
  thumbUrl?: string;
}


export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type_meta" })
  contentTypeMeta?: AttachmentContentTypeMeta;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=original_url" })
  originalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=variants" })
  variants?: AttachmentVariants;
}
