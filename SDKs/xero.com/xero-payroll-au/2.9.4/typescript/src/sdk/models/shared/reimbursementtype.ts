import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReimbursementType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReimbursementTypeID" })
  reimbursementTypeId?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
