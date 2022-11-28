import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateTimeOffPeriodResponseDataTypeEnum {
    TimeOffPeriod = "TimeOffPeriod"
}
export declare class CreateTimeOffPeriodResponseData extends SpeakeasyBase {
    attributes?: any;
    type?: CreateTimeOffPeriodResponseDataTypeEnum;
}
export declare class CreateTimeOffPeriodResponse extends SpeakeasyBase {
    data: CreateTimeOffPeriodResponseData;
    success: boolean;
}
