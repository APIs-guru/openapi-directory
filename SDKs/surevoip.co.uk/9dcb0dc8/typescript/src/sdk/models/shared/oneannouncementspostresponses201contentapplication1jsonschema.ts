import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement extends SpeakeasyBase {
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
  url?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl;
}


export class OneannouncementsPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement" })
  announcement?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement;
}
