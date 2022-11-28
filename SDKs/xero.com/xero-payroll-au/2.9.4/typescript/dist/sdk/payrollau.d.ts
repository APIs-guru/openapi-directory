import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayrollAu {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createEmployee - Creates a payroll employee
    **/
    createEmployee(req: operations.CreateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmployeeResponse>;
    /**
     * createLeaveApplication - Creates a leave application
    **/
    createLeaveApplication(req: operations.CreateLeaveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLeaveApplicationResponse>;
    /**
     * createPayItem - Creates a pay item
    **/
    createPayItem(req: operations.CreatePayItemRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayItemResponse>;
    /**
     * createPayRun - Creates a pay run
    **/
    createPayRun(req: operations.CreatePayRunRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayRunResponse>;
    /**
     * createPayrollCalendar - Creates a Payroll Calendar
    **/
    createPayrollCalendar(req: operations.CreatePayrollCalendarRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayrollCalendarResponse>;
    /**
     * createSuperfund - Creates a superfund
    **/
    createSuperfund(req: operations.CreateSuperfundRequest, config?: AxiosRequestConfig): Promise<operations.CreateSuperfundResponse>;
    /**
     * createTimesheet - Creates a timesheet
    **/
    createTimesheet(req: operations.CreateTimesheetRequest, config?: AxiosRequestConfig): Promise<operations.CreateTimesheetResponse>;
    /**
     * getEmployee - Retrieves an employee's detail by unique employee id
    **/
    getEmployee(req: operations.GetEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeeResponse>;
    /**
     * getEmployees - Searches payroll employees
    **/
    getEmployees(req: operations.GetEmployeesRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployeesResponse>;
    /**
     * getLeaveApplication - Retrieves a leave application by a unique leave application id
    **/
    getLeaveApplication(req: operations.GetLeaveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetLeaveApplicationResponse>;
    /**
     * getLeaveApplications - Retrieves leave applications
    **/
    getLeaveApplications(req: operations.GetLeaveApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLeaveApplicationsResponse>;
    /**
     * getPayItems - Retrieves pay items
    **/
    getPayItems(req: operations.GetPayItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayItemsResponse>;
    /**
     * getPayRun - Retrieves a pay run by using a unique pay run id
    **/
    getPayRun(req: operations.GetPayRunRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunResponse>;
    /**
     * getPayRuns - Retrieves pay runs
    **/
    getPayRuns(req: operations.GetPayRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunsResponse>;
    /**
     * getPayrollCalendar - Retrieves payroll calendar by using a unique payroll calendar ID
    **/
    getPayrollCalendar(req: operations.GetPayrollCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetPayrollCalendarResponse>;
    /**
     * getPayrollCalendars - Retrieves payroll calendars
    **/
    getPayrollCalendars(req: operations.GetPayrollCalendarsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayrollCalendarsResponse>;
    /**
     * getPayslip - Retrieves for a payslip by a unique payslip id
    **/
    getPayslip(req: operations.GetPayslipRequest, config?: AxiosRequestConfig): Promise<operations.GetPayslipResponse>;
    /**
     * getSettings - Retrieves payroll settings
    **/
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * getSuperfund - Retrieves a superfund by using a unique superfund ID
    **/
    getSuperfund(req: operations.GetSuperfundRequest, config?: AxiosRequestConfig): Promise<operations.GetSuperfundResponse>;
    /**
     * getSuperfundProducts - Retrieves superfund products
    **/
    getSuperfundProducts(req: operations.GetSuperfundProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetSuperfundProductsResponse>;
    /**
     * getSuperfunds - Retrieves superfunds
    **/
    getSuperfunds(req: operations.GetSuperfundsRequest, config?: AxiosRequestConfig): Promise<operations.GetSuperfundsResponse>;
    /**
     * getTimesheet - Retrieves a timesheet by using a unique timesheet id
    **/
    getTimesheet(req: operations.GetTimesheetRequest, config?: AxiosRequestConfig): Promise<operations.GetTimesheetResponse>;
    /**
     * getTimesheets - Retrieves timesheets
    **/
    getTimesheets(req: operations.GetTimesheetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTimesheetsResponse>;
    /**
     * updateEmployee - Updates an employee's detail
     *
     * Update properties on a single employee
    **/
    updateEmployee(req: operations.UpdateEmployeeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
    /**
     * updateLeaveApplication - Updates a specific leave application
    **/
    updateLeaveApplication(req: operations.UpdateLeaveApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLeaveApplicationResponse>;
    /**
     * updatePayRun - Updates a pay run
     *
     * Update properties on a single PayRun
    **/
    updatePayRun(req: operations.UpdatePayRunRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePayRunResponse>;
    /**
     * updatePayslip - Updates a payslip
     *
     * Update lines on a single payslips
    **/
    updatePayslip(req: operations.UpdatePayslipRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePayslipResponse>;
    /**
     * updateSuperfund - Updates a superfund
     *
     * Update properties on a single Superfund
    **/
    updateSuperfund(req: operations.UpdateSuperfundRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSuperfundResponse>;
    /**
     * updateTimesheet - Updates a timesheet
     *
     * Update properties on a single timesheet
    **/
    updateTimesheet(req: operations.UpdateTimesheetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTimesheetResponse>;
}
