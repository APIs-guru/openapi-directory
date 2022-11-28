import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankAccount } from "./bankaccount";
import { HomeAddress } from "./homeaddress";
import { LeaveBalance } from "./leavebalance";
import { LeaveLine } from "./leaveline";
import { OpeningBalances } from "./openingbalances";
import { PayTemplate } from "./paytemplate";
import { EmployeeStatusEnum } from "./employeestatusenum";
import { SuperMembership } from "./supermembership";
import { TaxDeclarationInput } from "./taxdeclaration";
import { ValidationError } from "./validationerror";
import { TaxDeclaration } from "./taxdeclaration";


export enum EmployeeGenderEnum {
    N = "N",
    M = "M",
    F = "F",
    I = "I"
}


export class EmployeeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BankAccounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=DateOfBirth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeGroupName" })
  employeeGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=Gender" })
  gender?: EmployeeGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HomeAddress" })
  homeAddress?: HomeAddress;

  @SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveLeave" })
  isAuthorisedToApproveLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveTimesheets" })
  isAuthorisedToApproveTimesheets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveBalances", elemType: LeaveBalance })
  leaveBalances?: LeaveBalance[];

  @SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine })
  leaveLines?: LeaveLine[];

  @SpeakeasyMetadata({ data: "json, name=MiddleNames" })
  middleNames?: string;

  @SpeakeasyMetadata({ data: "json, name=Mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningBalances" })
  openingBalances?: OpeningBalances;

  @SpeakeasyMetadata({ data: "json, name=OrdinaryEarningsRateID" })
  ordinaryEarningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=PayTemplate" })
  payTemplate?: PayTemplate;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EmployeeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SuperMemberships", elemType: SuperMembership })
  superMemberships?: SuperMembership[];

  @SpeakeasyMetadata({ data: "json, name=TaxDeclaration" })
  taxDeclaration?: TaxDeclarationInput;

  @SpeakeasyMetadata({ data: "json, name=TerminationDate" })
  terminationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TwitterUserName" })
  twitterUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class Employee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BankAccounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=DateOfBirth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeGroupName" })
  employeeGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=Gender" })
  gender?: EmployeeGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=HomeAddress" })
  homeAddress?: HomeAddress;

  @SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveLeave" })
  isAuthorisedToApproveLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsAuthorisedToApproveTimesheets" })
  isAuthorisedToApproveTimesheets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobTitle" })
  jobTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=LeaveBalances", elemType: LeaveBalance })
  leaveBalances?: LeaveBalance[];

  @SpeakeasyMetadata({ data: "json, name=LeaveLines", elemType: LeaveLine })
  leaveLines?: LeaveLine[];

  @SpeakeasyMetadata({ data: "json, name=MiddleNames" })
  middleNames?: string;

  @SpeakeasyMetadata({ data: "json, name=Mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningBalances" })
  openingBalances?: OpeningBalances;

  @SpeakeasyMetadata({ data: "json, name=OrdinaryEarningsRateID" })
  ordinaryEarningsRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=PayTemplate" })
  payTemplate?: PayTemplate;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=Phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EmployeeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SuperMemberships", elemType: SuperMembership })
  superMemberships?: SuperMembership[];

  @SpeakeasyMetadata({ data: "json, name=TaxDeclaration" })
  taxDeclaration?: TaxDeclaration;

  @SpeakeasyMetadata({ data: "json, name=TerminationDate" })
  terminationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=TwitterUserName" })
  twitterUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
