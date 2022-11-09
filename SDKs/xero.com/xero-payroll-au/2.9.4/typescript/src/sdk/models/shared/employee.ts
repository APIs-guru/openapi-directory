import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BankAccount } from "./bankaccount";
import { HomeAddress } from "./homeaddress";
import { LeaveBalance } from "./leavebalance";
import { LeaveLine } from "./leaveline";
import { OpeningBalances } from "./openingbalances";
import { PayTemplate } from "./paytemplate";
import { EmployeeStatusEnum } from "./employeestatusenum";
import { SuperMembership } from "./supermembership";
import { TaxDeclaration } from "./taxdeclaration";
import { ValidationError } from "./validationerror";

export enum EmployeeGenderEnum {
    N = "N"
,    M = "M"
,    F = "F"
,    I = "I"
}


export class Employee extends SpeakeasyBase {
  @Metadata({ data: "json, name=BankAccounts", elemType: shared.BankAccount })
  bankAccounts?: BankAccount[];

  @Metadata({ data: "json, name=Classification" })
  classification?: string;

  @Metadata({ data: "json, name=DateOfBirth" })
  dateOfBirth: string;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=EmployeeGroupName" })
  employeeGroupName?: string;

  @Metadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName: string;

  @Metadata({ data: "json, name=Gender" })
  gender?: EmployeeGenderEnum;

  @Metadata({ data: "json, name=HomeAddress" })
  homeAddress?: HomeAddress;

  @Metadata({ data: "json, name=IsAuthorisedToApproveLeave" })
  isAuthorisedToApproveLeave?: boolean;

  @Metadata({ data: "json, name=IsAuthorisedToApproveTimesheets" })
  isAuthorisedToApproveTimesheets?: boolean;

  @Metadata({ data: "json, name=JobTitle" })
  jobTitle?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName: string;

  @Metadata({ data: "json, name=LeaveBalances", elemType: shared.LeaveBalance })
  leaveBalances?: LeaveBalance[];

  @Metadata({ data: "json, name=LeaveLines", elemType: shared.LeaveLine })
  leaveLines?: LeaveLine[];

  @Metadata({ data: "json, name=MiddleNames" })
  middleNames?: string;

  @Metadata({ data: "json, name=Mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=OpeningBalances" })
  openingBalances?: OpeningBalances;

  @Metadata({ data: "json, name=OrdinaryEarningsRateID" })
  ordinaryEarningsRateId?: string;

  @Metadata({ data: "json, name=PayTemplate" })
  payTemplate?: PayTemplate;

  @Metadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @Metadata({ data: "json, name=Phone" })
  phone?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EmployeeStatusEnum;

  @Metadata({ data: "json, name=SuperMemberships", elemType: shared.SuperMembership })
  superMemberships?: SuperMembership[];

  @Metadata({ data: "json, name=TaxDeclaration" })
  taxDeclaration?: TaxDeclaration;

  @Metadata({ data: "json, name=TerminationDate" })
  terminationDate?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=TwitterUserName" })
  twitterUserName?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
