import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountMerge extends SpeakeasyBase {
  @SpeakeasyMetadata()
  mergeDate?: number;

  @SpeakeasyMetadata()
  newAccountId?: number;

  @SpeakeasyMetadata()
  oldAccountId?: number;
}
