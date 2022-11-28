import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReimbursementType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReimbursementTypeID" })
  reimbursementTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}


export class ReimbursementTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReimbursementTypeID" })
  reimbursementTypeId?: string;
}
