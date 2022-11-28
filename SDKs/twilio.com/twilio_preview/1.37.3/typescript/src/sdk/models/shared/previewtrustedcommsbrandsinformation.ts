import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewTrustedCommsBrandsInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_link" })
  fileLink?: string;

  @SpeakeasyMetadata({ data: "json, name=file_link_ttl_in_seconds" })
  fileLinkTtlInSeconds?: string;

  @SpeakeasyMetadata({ data: "json, name=update_time" })
  updateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
