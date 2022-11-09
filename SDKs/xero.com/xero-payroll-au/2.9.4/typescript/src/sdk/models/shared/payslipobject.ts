import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Payslip } from "./payslip";


export class PayslipObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=Payslip" })
  payslip?: Payslip;
}
