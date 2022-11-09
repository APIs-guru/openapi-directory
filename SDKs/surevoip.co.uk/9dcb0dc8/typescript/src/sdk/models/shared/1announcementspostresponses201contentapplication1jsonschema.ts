import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=download" })
  download?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement extends SpeakeasyBase {
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
  url?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncementUrl;
}


export class OneannouncementsPostResponses201ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcement" })
  announcement?: OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement;
}
