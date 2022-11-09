import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Report
/** 
 * Represents reports
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=created_checks_count" })
  createdChecksCount?: number;

  @Metadata({ data: "json, name=creation_date" })
  creationDate: Date;

  @Metadata({ data: "json, name=has_data" })
  hasData?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=invalid_checks_count" })
  invalidChecksCount?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=update_date" })
  updateDate: Date;
}
