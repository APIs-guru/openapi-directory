import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersAdvisoryDetailAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cves" })
  cves?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fixes" })
  fixes?: string;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=packages" })
  packages?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=public_date" })
  publicDate?: string;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: string[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: number;

  @SpeakeasyMetadata({ data: "json, name=solution" })
  solution?: string;

  @SpeakeasyMetadata({ data: "json, name=synopsis" })
  synopsis?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
