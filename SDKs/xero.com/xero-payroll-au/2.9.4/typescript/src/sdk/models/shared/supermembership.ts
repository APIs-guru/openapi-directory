import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SuperMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmployeeNumber" })
  employeeNumber: string;

  @Metadata({ data: "json, name=SuperFundID" })
  superFundId: string;

  @Metadata({ data: "json, name=SuperMembershipID" })
  superMembershipId?: string;
}
