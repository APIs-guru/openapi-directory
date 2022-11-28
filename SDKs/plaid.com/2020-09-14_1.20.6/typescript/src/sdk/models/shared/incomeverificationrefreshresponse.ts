import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationRefreshStatusEnum } from "./verificationrefreshstatusenum";



// IncomeVerificationRefreshResponse
/** 
 * IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
**/
export class IncomeVerificationRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=verification_refresh_status" })
  verificationRefreshStatus: VerificationRefreshStatusEnum;
}
