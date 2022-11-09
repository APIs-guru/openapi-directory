import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersAdvisoryItemAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisory_type" })
  advisoryType?: number;

  @Metadata({ data: "json, name=applicable_systems" })
  applicableSystems?: number;

  @Metadata({ data: "json, name=cve_count" })
  cveCount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=public_date" })
  publicDate?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: number;

  @Metadata({ data: "json, name=synopsis" })
  synopsis?: string;
}
