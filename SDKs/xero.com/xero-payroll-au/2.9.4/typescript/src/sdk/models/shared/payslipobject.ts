import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Payslip } from "./payslip";



export class PayslipObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Payslip" })
  payslip?: Payslip;
}
