import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DigitalWalletDetails
/** 
 * Additional details about `WALLET` type payments. Contains only non-confidential information.
**/
export class DigitalWalletDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;
}
