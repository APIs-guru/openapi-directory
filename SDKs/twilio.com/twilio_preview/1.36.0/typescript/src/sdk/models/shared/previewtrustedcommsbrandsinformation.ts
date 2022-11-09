import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewTrustedCommsBrandsInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_link" })
  fileLink?: string;

  @Metadata({ data: "json, name=file_link_ttl_in_seconds" })
  fileLinkTtlInSeconds?: string;

  @Metadata({ data: "json, name=update_time" })
  updateTime?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
