import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
export declare class Metric extends SpeakeasyBase {
    key?: string;
    type?: MetricTypeEnum;
    value?: number;
}
