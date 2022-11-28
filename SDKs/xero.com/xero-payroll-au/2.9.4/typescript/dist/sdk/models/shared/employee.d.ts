import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum EmployeeGenderEnum {
    N = "N",
    M = "M",
    F = "F",
    I = "I"
}
export declare class EmployeeInput extends SpeakeasyBase {
    bankAccounts?: BankAccount[];
    classification?: string;
    dateOfBirth: string;
    email?: string;
    employeeGroupName?: string;
    employeeId?: string;
    firstName: string;
    gender?: EmployeeGenderEnum;
    homeAddress?: HomeAddress;
    isAuthorisedToApproveLeave?: boolean;
    isAuthorisedToApproveTimesheets?: boolean;
    jobTitle?: string;
    lastName: string;
    leaveBalances?: LeaveBalance[];
    leaveLines?: LeaveLine[];
    middleNames?: string;
    mobile?: string;
    openingBalances?: OpeningBalances;
    ordinaryEarningsRateId?: string;
    payTemplate?: PayTemplate;
    payrollCalendarId?: string;
    phone?: string;
    startDate?: string;
    status?: EmployeeStatusEnum;
    superMemberships?: SuperMembership[];
    taxDeclaration?: TaxDeclarationInput;
    terminationDate?: string;
    title?: string;
    twitterUserName?: string;
    validationErrors?: ValidationError[];
}
export declare class Employee extends SpeakeasyBase {
    bankAccounts?: BankAccount[];
    classification?: string;
    dateOfBirth: string;
    email?: string;
    employeeGroupName?: string;
    employeeId?: string;
    firstName: string;
    gender?: EmployeeGenderEnum;
    homeAddress?: HomeAddress;
    isAuthorisedToApproveLeave?: boolean;
    isAuthorisedToApproveTimesheets?: boolean;
    jobTitle?: string;
    lastName: string;
    leaveBalances?: LeaveBalance[];
    leaveLines?: LeaveLine[];
    middleNames?: string;
    mobile?: string;
    openingBalances?: OpeningBalances;
    ordinaryEarningsRateId?: string;
    payTemplate?: PayTemplate;
    payrollCalendarId?: string;
    phone?: string;
    startDate?: string;
    status?: EmployeeStatusEnum;
    superMemberships?: SuperMembership[];
    taxDeclaration?: TaxDeclaration;
    terminationDate?: string;
    title?: string;
    twitterUserName?: string;
    updatedDateUtc?: string;
    validationErrors?: ValidationError[];
}
