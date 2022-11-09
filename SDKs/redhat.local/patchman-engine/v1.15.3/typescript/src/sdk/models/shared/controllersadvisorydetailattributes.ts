import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersAdvisoryDetailAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cves" })
  cves?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fixes" })
  fixes?: string;

  @Metadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @Metadata({ data: "json, name=packages" })
  packages?: Map<string, string>;

  @Metadata({ data: "json, name=public_date" })
  publicDate?: string;

  @Metadata({ data: "json, name=references" })
  references?: string[];

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=solution" })
  solution?: string;

  @Metadata({ data: "json, name=synopsis" })
  synopsis?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
