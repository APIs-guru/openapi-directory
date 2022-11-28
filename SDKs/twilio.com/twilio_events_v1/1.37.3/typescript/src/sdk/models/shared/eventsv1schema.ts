import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventsV1Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=latest_version" })
  latestVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=latest_version_date_created" })
  latestVersionDateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
