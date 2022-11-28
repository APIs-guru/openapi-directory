import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Report
/** 
 * Represents reports
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created_checks_count" })
  createdChecksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=has_data" })
  hasData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_checks_count" })
  invalidChecksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate: Date;
}
