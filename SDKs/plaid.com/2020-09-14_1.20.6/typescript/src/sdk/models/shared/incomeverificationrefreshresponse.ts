import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationRefreshStatusEnum } from "./verificationrefreshstatusenum";


// IncomeVerificationRefreshResponse
/** 
 * IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
**/
export class IncomeVerificationRefreshResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId: string;

  @Metadata({ data: "json, name=verification_refresh_status" })
  verificationRefreshStatus: VerificationRefreshStatusEnum;
}
