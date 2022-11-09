import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsV1Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=latest_version" })
  latestVersion?: number;

  @Metadata({ data: "json, name=latest_version_date_created" })
  latestVersionDateCreated?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
